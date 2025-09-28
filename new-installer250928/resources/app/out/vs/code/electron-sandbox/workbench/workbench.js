/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

// out-build/vs/code/electron-sandbox/workbench/workbench.js
(function() {
  const preloadGlobals = window.vscode;
  const safeProcess = preloadGlobals.process;
  async function load(esModule, options) {
    const configuration = await resolveWindowConfiguration();
    options?.beforeImport?.(configuration);
    const { enableDeveloperKeybindings, removeDeveloperKeybindingsAfterLoad, developerDeveloperKeybindingsDisposable, forceDisableShowDevtoolsOnError } = setupDeveloperKeybindings(configuration, options);
    setupNLS(configuration);
    const baseUrl = new URL(`${fileUriFromPath(configuration.appRoot, { isWindows: safeProcess.platform === "win32", scheme: "vscode-file", fallbackAuthority: "vscode-app" })}/out/`);
    globalThis._VSCODE_FILE_ROOT = baseUrl.toString();
    setupCSSImportMaps(configuration, baseUrl);
    try {
      const result = await import(new URL(`${esModule}.js`, baseUrl).href);
      if (developerDeveloperKeybindingsDisposable && removeDeveloperKeybindingsAfterLoad) {
        developerDeveloperKeybindingsDisposable();
      }
      return { result, configuration };
    } catch (error) {
      onUnexpectedError(error, enableDeveloperKeybindings && !forceDisableShowDevtoolsOnError);
      throw error;
    }
  }
  async function resolveWindowConfiguration() {
    const timeout = setTimeout(() => {
      console.error(`[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...`);
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const configuration = await preloadGlobals.context.resolveConfiguration();
    performance.mark("code/didWaitForWindowConfig");
    clearTimeout(timeout);
    return configuration;
  }
  function setupDeveloperKeybindings(configuration, options) {
    const { forceEnableDeveloperKeybindings, disallowReloadKeybinding, removeDeveloperKeybindingsAfterLoad, forceDisableShowDevtoolsOnError } = typeof options?.configureDeveloperSettings === "function" ? options.configureDeveloperSettings(configuration) : {
      forceEnableDeveloperKeybindings: false,
      disallowReloadKeybinding: false,
      removeDeveloperKeybindingsAfterLoad: false,
      forceDisableShowDevtoolsOnError: false
    };
    const isDev = !!safeProcess.env["VSCODE_DEV"];
    const enableDeveloperKeybindings = Boolean(isDev || forceEnableDeveloperKeybindings);
    let developerDeveloperKeybindingsDisposable = void 0;
    if (enableDeveloperKeybindings) {
      developerDeveloperKeybindingsDisposable = registerDeveloperKeybindings(disallowReloadKeybinding);
    }
    return {
      enableDeveloperKeybindings,
      removeDeveloperKeybindingsAfterLoad,
      developerDeveloperKeybindingsDisposable,
      forceDisableShowDevtoolsOnError
    };
  }
  function registerDeveloperKeybindings(disallowReloadKeybinding) {
    const ipcRenderer = preloadGlobals.ipcRenderer;
    const extractKey = function(e) {
      return [
        e.ctrlKey ? "ctrl-" : "",
        e.metaKey ? "meta-" : "",
        e.altKey ? "alt-" : "",
        e.shiftKey ? "shift-" : "",
        e.keyCode
      ].join("");
    };
    const TOGGLE_DEV_TOOLS_KB = safeProcess.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73";
    const TOGGLE_DEV_TOOLS_KB_ALT = "123";
    const RELOAD_KB = safeProcess.platform === "darwin" ? "meta-82" : "ctrl-82";
    let listener = function(e) {
      const key = extractKey(e);
      if (key === TOGGLE_DEV_TOOLS_KB || key === TOGGLE_DEV_TOOLS_KB_ALT) {
        ipcRenderer.send("vscode:toggleDevTools");
      } else if (key === RELOAD_KB && !disallowReloadKeybinding) {
        ipcRenderer.send("vscode:reloadWindow");
      }
    };
    window.addEventListener("keydown", listener);
    return function() {
      if (listener) {
        window.removeEventListener("keydown", listener);
        listener = void 0;
      }
    };
  }
  function setupNLS(configuration) {
    globalThis._VSCODE_NLS_MESSAGES = configuration.nls.messages;
    globalThis._VSCODE_NLS_LANGUAGE = configuration.nls.language;
    let language = configuration.nls.language || "en";
    if (language === "zh-tw") {
      language = "zh-Hant";
    } else if (language === "zh-cn") {
      language = "zh-Hans";
    }
    window.document.documentElement.setAttribute("lang", language);
  }
  function onUnexpectedError(error, showDevtoolsOnError) {
    if (showDevtoolsOnError) {
      const ipcRenderer = preloadGlobals.ipcRenderer;
      ipcRenderer.send("vscode:openDevTools");
    }
    console.error(`[uncaught exception]: ${error}`);
    if (error && typeof error !== "string" && error.stack) {
      console.error(error.stack);
    }
  }
  function fileUriFromPath(path, config) {
    let pathName = path.replace(/\\/g, "/");
    if (pathName.length > 0 && pathName.charAt(0) !== "/") {
      pathName = `/${pathName}`;
    }
    let uri;
    if (config.isWindows && pathName.startsWith("//")) {
      uri = encodeURI(`${config.scheme || "file"}:${pathName}`);
    } else {
      uri = encodeURI(`${config.scheme || "file"}://${config.fallbackAuthority || ""}${pathName}`);
    }
    return uri.replace(/#/g, "%23");
  }
  function setupCSSImportMaps(configuration, baseUrl) {
    if (Array.isArray(configuration.cssModules) && configuration.cssModules.length > 0) {
      performance.mark("code/willAddCssLoader");
      const style = document.createElement("style");
      style.type = "text/css";
      style.media = "screen";
      style.id = "vscode-css-loading";
      document.head.appendChild(style);
      globalThis._VSCODE_CSS_LOAD = function(url) {
        style.textContent += `@import url(${url});
`;
      };
      const importMap = { imports: {} };
      for (const cssModule of configuration.cssModules) {
        const cssUrl = new URL(cssModule, baseUrl).href;
        const jsSrc = `globalThis._VSCODE_CSS_LOAD('${cssUrl}');
`;
        const blob = new Blob([jsSrc], { type: "application/javascript" });
        importMap.imports[cssUrl] = URL.createObjectURL(blob);
      }
      const ttp = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", { createScript(value) {
        return value;
      } });
      const importMapSrc = JSON.stringify(importMap, void 0, 2);
      const importMapScript = document.createElement("script");
      importMapScript.type = "importmap";
      importMapScript.setAttribute("nonce", "0c6a828f1297");
      importMapScript.textContent = ttp?.createScript(importMapSrc) ?? importMapSrc;
      document.head.appendChild(importMapScript);
      performance.mark("code/didAddCssLoader");
    }
  }
  globalThis.MonacoBootstrapWindow = { load };
})();
(async function() {
  performance.mark("code/didStartRenderer");
  const bootstrapWindow = window.MonacoBootstrapWindow;
  const preloadGlobals = window.vscode;
  function showSplash(configuration2) {
    performance.mark("code/willShowPartsSplash");
    let data = configuration2.partsSplash;
    if (data) {
      if (configuration2.autoDetectHighContrast && configuration2.colorScheme.highContrast) {
        if (configuration2.colorScheme.dark && data.baseTheme !== "hc-black" || !configuration2.colorScheme.dark && data.baseTheme !== "hc-light") {
          data = void 0;
        }
      } else if (configuration2.autoDetectColorScheme) {
        if (configuration2.colorScheme.dark && data.baseTheme !== "vs-dark" || !configuration2.colorScheme.dark && data.baseTheme !== "vs") {
          data = void 0;
        }
      }
    }
    if (data && configuration2.extensionDevelopmentPath) {
      data.layoutInfo = void 0;
    }
    let baseTheme;
    let shellBackground;
    let shellForeground;
    if (data) {
      baseTheme = data.baseTheme;
      shellBackground = data.colorInfo.editorBackground;
      shellForeground = data.colorInfo.foreground;
    } else if (configuration2.autoDetectHighContrast && configuration2.colorScheme.highContrast) {
      if (configuration2.colorScheme.dark) {
        baseTheme = "hc-black";
        shellBackground = "#000000";
        shellForeground = "#FFFFFF";
      } else {
        baseTheme = "hc-light";
        shellBackground = "#FFFFFF";
        shellForeground = "#000000";
      }
    } else if (configuration2.autoDetectColorScheme) {
      if (configuration2.colorScheme.dark) {
        baseTheme = "vs-dark";
        shellBackground = "#1E1E1E";
        shellForeground = "#CCCCCC";
      } else {
        baseTheme = "vs";
        shellBackground = "#FFFFFF";
        shellForeground = "#000000";
      }
    }
    const style = document.createElement("style");
    style.className = "initialShellColors";
    window.document.head.appendChild(style);
    style.textContent = `body {	background-color: ${shellBackground}; color: ${shellForeground}; margin: 0; padding: 0; }`;
    if (typeof data?.zoomLevel === "number" && typeof preloadGlobals?.webFrame?.setZoomLevel === "function") {
      preloadGlobals.webFrame.setZoomLevel(data.zoomLevel);
    }
    if (data?.layoutInfo) {
      const { layoutInfo, colorInfo } = data;
      const splash = document.createElement("div");
      splash.id = "monaco-parts-splash";
      splash.className = baseTheme ?? "vs-dark";
      if (layoutInfo.windowBorder && colorInfo.windowBorder) {
        splash.style.position = "relative";
        splash.style.height = "calc(100vh - 2px)";
        splash.style.width = "calc(100vw - 2px)";
        splash.style.border = `1px solid var(--window-border-color)`;
        splash.style.setProperty("--window-border-color", colorInfo.windowBorder);
        if (layoutInfo.windowBorderRadius) {
          splash.style.borderRadius = layoutInfo.windowBorderRadius;
        }
      }
      layoutInfo.auxiliarySideBarWidth = Math.min(layoutInfo.auxiliarySideBarWidth, window.innerWidth - (layoutInfo.activityBarWidth + layoutInfo.editorPartMinWidth + layoutInfo.sideBarWidth));
      layoutInfo.sideBarWidth = Math.min(layoutInfo.sideBarWidth, window.innerWidth - (layoutInfo.activityBarWidth + layoutInfo.editorPartMinWidth + layoutInfo.auxiliarySideBarWidth));
      if (layoutInfo.titleBarHeight > 0) {
        const titleDiv = document.createElement("div");
        titleDiv.style.position = "absolute";
        titleDiv.style.width = "100%";
        titleDiv.style.height = `${layoutInfo.titleBarHeight}px`;
        titleDiv.style.left = "0";
        titleDiv.style.top = "0";
        titleDiv.style.backgroundColor = `${colorInfo.titleBarBackground}`;
        titleDiv.style["-webkit-app-region"] = "drag";
        splash.appendChild(titleDiv);
        if (colorInfo.titleBarBorder) {
          const titleBorder = document.createElement("div");
          titleBorder.style.position = "absolute";
          titleBorder.style.width = "100%";
          titleBorder.style.height = "1px";
          titleBorder.style.left = "0";
          titleBorder.style.bottom = "0";
          titleBorder.style.borderBottom = `1px solid ${colorInfo.titleBarBorder}`;
          titleDiv.appendChild(titleBorder);
        }
      }
      if (layoutInfo.activityBarWidth > 0) {
        const activityDiv = document.createElement("div");
        activityDiv.style.position = "absolute";
        activityDiv.style.width = `${layoutInfo.activityBarWidth}px`;
        activityDiv.style.height = `calc(100% - ${layoutInfo.titleBarHeight + layoutInfo.statusBarHeight}px)`;
        activityDiv.style.top = `${layoutInfo.titleBarHeight}px`;
        if (layoutInfo.sideBarSide === "left") {
          activityDiv.style.left = "0";
        } else {
          activityDiv.style.right = "0";
        }
        activityDiv.style.backgroundColor = `${colorInfo.activityBarBackground}`;
        splash.appendChild(activityDiv);
        if (colorInfo.activityBarBorder) {
          const activityBorderDiv = document.createElement("div");
          activityBorderDiv.style.position = "absolute";
          activityBorderDiv.style.width = "1px";
          activityBorderDiv.style.height = "100%";
          activityBorderDiv.style.top = "0";
          if (layoutInfo.sideBarSide === "left") {
            activityBorderDiv.style.right = "0";
            activityBorderDiv.style.borderRight = `1px solid ${colorInfo.activityBarBorder}`;
          } else {
            activityBorderDiv.style.left = "0";
            activityBorderDiv.style.borderLeft = `1px solid ${colorInfo.activityBarBorder}`;
          }
          activityDiv.appendChild(activityBorderDiv);
        }
      }
      if (configuration2.workspace && layoutInfo.sideBarWidth > 0) {
        const sideDiv = document.createElement("div");
        sideDiv.style.position = "absolute";
        sideDiv.style.width = `${layoutInfo.sideBarWidth}px`;
        sideDiv.style.height = `calc(100% - ${layoutInfo.titleBarHeight + layoutInfo.statusBarHeight}px)`;
        sideDiv.style.top = `${layoutInfo.titleBarHeight}px`;
        if (layoutInfo.sideBarSide === "left") {
          sideDiv.style.left = `${layoutInfo.activityBarWidth}px`;
        } else {
          sideDiv.style.right = `${layoutInfo.activityBarWidth}px`;
        }
        sideDiv.style.backgroundColor = `${colorInfo.sideBarBackground}`;
        splash.appendChild(sideDiv);
        if (colorInfo.sideBarBorder) {
          const sideBorderDiv = document.createElement("div");
          sideBorderDiv.style.position = "absolute";
          sideBorderDiv.style.width = "1px";
          sideBorderDiv.style.height = "100%";
          sideBorderDiv.style.top = "0";
          sideBorderDiv.style.right = "0";
          if (layoutInfo.sideBarSide === "left") {
            sideBorderDiv.style.borderRight = `1px solid ${colorInfo.sideBarBorder}`;
          } else {
            sideBorderDiv.style.left = "0";
            sideBorderDiv.style.borderLeft = `1px solid ${colorInfo.sideBarBorder}`;
          }
          sideDiv.appendChild(sideBorderDiv);
        }
      }
      if (layoutInfo.auxiliarySideBarWidth > 0) {
        const auxSideDiv = document.createElement("div");
        auxSideDiv.style.position = "absolute";
        auxSideDiv.style.width = `${layoutInfo.auxiliarySideBarWidth}px`;
        auxSideDiv.style.height = `calc(100% - ${layoutInfo.titleBarHeight + layoutInfo.statusBarHeight}px)`;
        auxSideDiv.style.top = `${layoutInfo.titleBarHeight}px`;
        if (layoutInfo.sideBarSide === "left") {
          auxSideDiv.style.right = "0";
        } else {
          auxSideDiv.style.left = "0";
        }
        auxSideDiv.style.backgroundColor = `${colorInfo.sideBarBackground}`;
        splash.appendChild(auxSideDiv);
        if (colorInfo.sideBarBorder) {
          const auxSideBorderDiv = document.createElement("div");
          auxSideBorderDiv.style.position = "absolute";
          auxSideBorderDiv.style.width = "1px";
          auxSideBorderDiv.style.height = "100%";
          auxSideBorderDiv.style.top = "0";
          if (layoutInfo.sideBarSide === "left") {
            auxSideBorderDiv.style.left = "0";
            auxSideBorderDiv.style.borderLeft = `1px solid ${colorInfo.sideBarBorder}`;
          } else {
            auxSideBorderDiv.style.right = "0";
            auxSideBorderDiv.style.borderRight = `1px solid ${colorInfo.sideBarBorder}`;
          }
          auxSideDiv.appendChild(auxSideBorderDiv);
        }
      }
      if (layoutInfo.statusBarHeight > 0) {
        const statusDiv = document.createElement("div");
        statusDiv.style.position = "absolute";
        statusDiv.style.width = "100%";
        statusDiv.style.height = `${layoutInfo.statusBarHeight}px`;
        statusDiv.style.bottom = "0";
        statusDiv.style.left = "0";
        if (configuration2.workspace && colorInfo.statusBarBackground) {
          statusDiv.style.backgroundColor = colorInfo.statusBarBackground;
        } else if (!configuration2.workspace && colorInfo.statusBarNoFolderBackground) {
          statusDiv.style.backgroundColor = colorInfo.statusBarNoFolderBackground;
        }
        splash.appendChild(statusDiv);
        if (colorInfo.statusBarBorder) {
          const statusBorderDiv = document.createElement("div");
          statusBorderDiv.style.position = "absolute";
          statusBorderDiv.style.width = "100%";
          statusBorderDiv.style.height = "1px";
          statusBorderDiv.style.top = "0";
          statusBorderDiv.style.borderTop = `1px solid ${colorInfo.statusBarBorder}`;
          statusDiv.appendChild(statusBorderDiv);
        }
      }
      window.document.body.appendChild(splash);
    }
    performance.mark("code/didShowPartsSplash");
  }
  const { result, configuration } = await bootstrapWindow.load("vs/workbench/workbench.desktop.main", {
    configureDeveloperSettings: function(windowConfig) {
      return {
        // disable automated devtools opening on error when running extension tests
        // as this can lead to nondeterministic test execution (devtools steals focus)
        forceDisableShowDevtoolsOnError: typeof windowConfig.extensionTestsPath === "string" || windowConfig["enable-smoke-test-driver"] === true,
        // enable devtools keybindings in extension development window
        forceEnableDeveloperKeybindings: Array.isArray(windowConfig.extensionDevelopmentPath) && windowConfig.extensionDevelopmentPath.length > 0,
        removeDeveloperKeybindingsAfterLoad: true
      };
    },
    beforeImport: function(windowConfig) {
      showSplash(windowConfig);
      Object.defineProperty(window, "vscodeWindowId", {
        get: () => windowConfig.windowId
      });
      window.requestIdleCallback(() => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context?.clearRect(0, 0, canvas.width, canvas.height);
        canvas.remove();
      }, { timeout: 50 });
      performance.mark("code/willLoadWorkbenchMain");
    }
  });
  performance.mark("code/didLoadWorkbenchMain");
  result.main(configuration);
})();

//# sourceMappingURL=workbench.js.map
