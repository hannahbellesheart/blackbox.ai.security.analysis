> ## Documentation Index
> Fetch the complete documentation index at: https://docs.blackbox.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a Multi-Agent Task

> Execute tasks using multiple AI agents(BLACKBOX, Claude Code, Codex, Gemini) simultaneously to compare approaches, validate solutions, and get diverse perspectives.

Multi-Agent Tasks allow you to run the same task across multiple AI agents in parallel, enabling you to compare different approaches, validate implementations, and choose the best solution for your needs.

## Authentication

To use this API, you need a BLACKBOX API Key. Follow these steps to get your API key:

1. **Click on your Profile Image** in the top right corner at [cloud.blackbox.ai](https://cloud.blackbox.ai)
2. **Click on "BLACKBOX API Token"** from the dropdown menu
3. **Copy the existing token** or **click "Generate"** if you don't have one yet

Your API key will be in the format: `bb_xxxxxxxxxxxxxxxxxxxxxx`

## GitHub Connection Required

<Note>
  **For GitHub-related tasks**: Make sure you have connected your GitHub account on [https://cloud.blackbox.ai](https://cloud.blackbox.ai) before creating tasks that work with repositories. This is required for the agent to access and modify your repositories.
</Note>

## Headers

<ParamField header="Authorization" type="string" required>
  API Key of the form `Bearer <api_key>`.

  Example: `Bearer bb_b41b647ffbfed27f61656049d3eaeef3d903cc503345d9eb80080d98bc0`
</ParamField>

<ParamField header="Content-Type" type="string" required>
  Must be set to `application/json`.
</ParamField>

## Request Parameters

<ParamField body="prompt" type="string" required>
  The task description or instruction for the AI agents to execute. All agents will work on the same prompt.

  Examples:

  * "Add Stripe Payment Gateway"
  * "Implement user authentication with JWT"
  * "Refactor the payment processing module"
  * "Add comprehensive unit tests"
</ParamField>

<ParamField body="selectedAgents" type="array" required>
  An array of agent configurations. Each agent will independently execute the task in parallel.

  **Structure**: Each object must contain:

  * `agent` (string, required): The agent type
  * `model` (string, required): The specific model to use

  **Available Agents**:

  * `claude` - Anthropic's Claude models
  * `blackbox` - BLACKBOX AI models
  * `codex` - OpenAI's GPT models
  * `gemini` - Google's Gemini models

  **Example**:

  ```json  theme={null}
  [
    {
      "agent": "claude",
      "model": "blackboxai/anthropic/claude-sonnet-4.5"
    },
    {
      "agent": "blackbox",
      "model": "blackboxai/blackbox-pro"
    },
    {
      "agent": "gemini",
      "model": "gemini-2.0-flash-exp"
    }
  ]
  ```

  **Minimum**: 2 agents\
  **Maximum**: 5 agents
</ParamField>

<ParamField body="repoUrl" type="string">
  GitHub repository URL to work on. If provided, all agents will work on this repository.

  Example: `https://github.com/username/repository.git`
</ParamField>

<ParamField body="selectedBranch" type="string">
  The branch to work on in the repository. Defaults to `main` if not specified.

  Example: `main`, `master`, `develop`, `feature/new-feature`
</ParamField>

## Available Agent Models

### Claude Agent

```json  theme={null}
{
  "agent": "claude",
  "model": "blackboxai/anthropic/claude-sonnet-4.5" // or claude-sonnet-4, claude-opus-4.5
}
```

**Available Models**:

* `blackboxai/anthropic/claude-sonnet-4.5` - Latest Sonnet (Recommended)
* `blackboxai/anthropic/claude-sonnet-4` - Sonnet 4
* `blackboxai/anthropic/claude-opus-4.5` - Most capable Claude model

### BLACKBOX Agent

```json  theme={null}
{
  "agent": "blackbox",
  "model": "blackboxai/blackbox-pro" // or other blackbox models
}
```

**Available Models**:

* `blackboxai/blackbox-pro` - BLACKBOX PRO (Recommended)
* `blackboxai/anthropic/claude-sonnet-4.5` - Claude via BLACKBOX
* `blackboxai/openai/gpt-5.2-codex` - GPT-5.2 Codex via BLACKBOX
* `blackboxai/anthropic/claude-opus-4.5` - Claude Opus via BLACKBOX
* `blackboxai/x-ai/grok-code-fast-1:free` - Grok Code (Free)
* `blackboxai/google/gemini-2.5-pro` - Gemini via BLACKBOX

### Codex Agent

```json  theme={null}
{
  "agent": "codex",
  "model": "gpt-5-codex" // or other OpenAI models
}
```

**Available Models**:

* `gpt-5.2-codex` - GPT-5.2 Codex (Recommended)
* `openai/gpt-5` - GPT-5
* `openai/gpt-5-mini` - GPT-5 Mini
* `openai/gpt-5-nano` - GPT-5 Nano
* `openai/gpt-4.1` - GPT-4.1

### Gemini Agent

```json  theme={null}
{
  "agent": "gemini",
  "model": "gemini-2.0-flash-exp" // or other Gemini models
}
```

**Available Models**:

* `gemini-2.0-flash-exp` - Gemini 2.0 Flash (Recommended)
* `gemini-2.5-pro` - Gemini 2.5 Pro
* `gemini-2.5-flash` - Gemini 2.5 Flash

## How Multi-Agent Tasks Work

1. **Task Submission**: You submit a single task with multiple agent configurations
2. **Parallel Execution**: Each agent independently processes the task simultaneously
3. **Independent Analysis**: Each agent analyzes the codebase and creates its own solution
4. **Separate Commits**: Each agent creates its own commits (if working on a repository)
5. **Result Aggregation**: All results are tracked in the `agentExecutions` array
6. **Comparison**: You can compare approaches, code quality, and results across all agents

## Response Structure

The response includes several fields specific to multi-agent tasks:

* **`selectedAgents`**: Array of agent configurations used (always present when multi-agent task is created)
* **`multiLaunch`**: Initially `false`, becomes `true` when agents start executing
* **`agentExecutions`**: Initially `null`, populated when agents start executing. Once populated, contains:
  * `agent`: The agent type
  * `model`: The model used
  * `status`: Current status (`pending`, `in_progress`, `completed`, `failed`)
  * `executionId`: Unique identifier for this agent's execution
  * `result`: The agent's output (when completed)
  * `commits`: Array of commits made by this agent
  * `error`: Error message (if failed)

**Note**: When you first create a multi-agent task, `agentExecutions` will be `null` and `multiLaunch` will be `false`. You need to poll the task status to see when agents start executing and `agentExecutions` gets populated.

<RequestExample>
  ```bash Multi-Agent Repository Task theme={null}
  curl --location 'https://cloud.blackbox.ai/api/tasks' \
  --header 'Authorization: Bearer bb_YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
      "prompt": "Add README in Mandarin",
      "repoUrl": "https://github.com/<org_name>/<repo_name>.git",
      "selectedBranch": "main",
      "selectedAgents": [
          {
              "agent": "claude",
              "model": "blackboxai/anthropic/claude-sonnet-4.5"
          },
          {
              "agent": "blackbox",
              "model": "blackboxai/blackbox-pro"
          }
      ]
  }'
  ```

  ```javascript Node.js - Multi-Agent Task theme={null}
  const API_KEY = "bb_YOUR_API_KEY";
  const API_URL = "https://cloud.blackbox.ai/api/tasks";

  const data = {
      prompt: "Add README in Mandarin",
      repoUrl: "https://github.com/<org_name>/<repo_name>.git",
      selectedBranch: "main",
      selectedAgents: [
          {
              agent: "claude",
              model: "blackboxai/anthropic/claude-sonnet-4.5"
          },
          {
              agent: "blackbox",
              model: "blackboxai/blackbox-pro"
          },
          {
              agent: "gemini",
              model: "gemini-2.0-flash-exp"
          }
      ]
  };

  const response = await fetch(API_URL, {
      method: "POST",
      headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);

  // Poll for completion
  const taskId = result.task.id;
  const checkStatus = async () => {
      const statusResponse = await fetch(`${API_URL}/${taskId}`, {
          headers: { Authorization: `Bearer ${API_KEY}` }
      });
      const status = await statusResponse.json();
      
      // Check if all agents completed
      const allCompleted = status.task.agentExecutions.every(
          exec => exec.status === 'completed' || exec.status === 'failed'
      );
      
      if (allCompleted) {
          console.log("All agents completed!");
          console.log(status.task.agentExecutions);
      } else {
          setTimeout(checkStatus, 5000); // Check again in 5 seconds
      }
  };

  checkStatus();
  ```

  ```python Python - Multi-Agent Task theme={null}
  import requests
  import time

  API_KEY = "bb_YOUR_API_KEY"
  API_URL = "https://cloud.blackbox.ai/api/tasks"

  headers = {
      "Content-Type": "application/json",
      "Authorization": f"Bearer {API_KEY}"
  }

  data = {
      "prompt": "Add README in Mandarin",
      "repoUrl": "https://github.com/<org_name>/<repo_name>.git",
      "selectedBranch": "main",
      "selectedAgents": [
          {
              "agent": "claude",
              "model": "blackboxai/anthropic/claude-sonnet-4.5"
          },
          {
              "agent": "blackbox",
              "model": "blackboxai/blackbox-pro"
          },
          {
              "agent": "codex",
              "model": "gpt-5-codex"
          }
      ]
  }

  # Create task
  response = requests.post(API_URL, headers=headers, json=data)
  result = response.json()
  task_id = result["task"]["id"]

  print(f"Task created: {task_id}")
  print(f"Agents: {len(data['selectedAgents'])}")

  # Poll for completion
  def check_status():
      status_response = requests.get(f"{API_URL}/{task_id}", headers=headers)
      status = status_response.json()
      
      agent_executions = status["task"]["agentExecutions"]
      
      print("\nAgent Status:")
      for execution in agent_executions:
          print(f"  {execution['agent']} ({execution['model']}): {execution['status']}")
      
      # Check if all completed
      all_completed = all(
          exec["status"] in ["completed", "failed"] 
          for exec in agent_executions
      )
      
      if all_completed:
          print("\n✓ All agents completed!")
          return True
      return False

  # Poll every 5 seconds
  while not check_status():
      time.sleep(5)
  ```

  ```python Python - Compare Results theme={null}
  import requests

  API_KEY = "bb_YOUR_API_KEY"
  API_URL = "https://cloud.blackbox.ai/api/tasks"

  headers = {
      "Content-Type": "application/json",
      "Authorization": f"Bearer {API_KEY}"
  }

  # Get task results
  task_id = "your_task_id_here"
  response = requests.get(f"{API_URL}/{task_id}", headers=headers)
  task = response.json()["task"]

  # Compare agent results
  print("=== Multi-Agent Comparison ===\n")

  for execution in task["agentExecutions"]:
      print(f"Agent: {execution['agent']}")
      print(f"Model: {execution['model']}")
      print(f"Status: {execution['status']}")
      
      if execution['status'] == 'completed':
          print(f"Commits: {len(execution.get('commits', []))}")
          print(f"Files Changed: {execution.get('filesChanged', 0)}")
          print(f"Lines Added: {execution.get('linesAdded', 0)}")
          print(f"Lines Removed: {execution.get('linesRemoved', 0)}")
      elif execution['status'] == 'failed':
          print(f"Error: {execution.get('error', 'Unknown error')}")
      
      print("-" * 50)
  ```
</RequestExample>

<ResponseExample>
  ```json Success Response (Initial) theme={null}
  {
    "task": {
      "id": "4GsNQMMsGZpv8x_J9ms6L",
      "userId": "user@gmail.com",
      "teamId": null,
      "prompt": "add readme in mandarin",
      "repoUrl": "https://github.com/<org_name>/<repo_name>.git",
      "selectedAgent": "blackbox",
      "selectedModel": "blackboxai/blackbox-pro",
      "installDependencies": false,
      "maxDuration": 300,
      "keepAlive": false,
      "status": "pending",
      "progress": 0,
      "logs": [],
      "followupMessages": null,
      "checkpoint": null,
      "error": null,
      "selectedBranch": "main",
      "branchName": null,
      "sandboxUrl": null,
      "sandboxId": null,
      "agentSandboxConfig": null,
      "merged": false,
      "prNumber": null,
      "prUrl": null,
      "multiLaunch": false,
      "selectedAgents": [
        {
          "agent": "claude",
          "model": "blackboxai/anthropic/claude-sonnet-4.5"
        },
        {
          "agent": "blackbox",
          "model": "blackboxai/blackbox-pro"
        }
      ],
      "agentExecutions": null,
      "diffAnalysis": null,
      "diffStats": null,
      "cumulativeDiff": null,
      "taskSource": "manual",
      "scheduledTaskId": null,
      "repoInstructions": null,
      "environmentVariables": null,
      "testAccounts": null,
      "autoDeployEnabled": false,
      "deploymentProvider": "vercel",
      "vercelDeploymentSettings": null,
      "gcloudDeploymentSettings": null,
      "deployments": null,
      "lock": null,
      "createdAt": "2025-11-20T20:16:19.489Z",
      "updatedAt": "2025-11-20T20:16:19.489Z",
      "completedAt": null,
      "slackUserId": null,
      "slackTeamId": null,
      "slackChannelId": null,
      "slackMessageTs": null,
      "badge": null,
      "batchId": null,
      "isPublic": false,
      "isEmptyGitUser": false,
      "metaData": null
    },
    "taskUrl": "https://cloud.blackbox.ai/tasks/4GsNQMMsGZpv8x_J9ms6L"
  }
  ```

  ```json Completed Multi-Agent Response theme={null}
  {
    "task": {
      "id": "ma_xyz123abc456def789",
      "status": "completed",
      "multiLaunch": true,
      "selectedAgents": [
        {
          "agent": "claude",
          "model": "blackboxai/anthropic/claude-sonnet-4.5"
        },
        {
          "agent": "blackbox",
          "model": "blackboxai/blackbox-pro"
        }
      ],
      "agentExecutions": [
        {
          "agent": "claude",
          "model": "blackboxai/anthropic/claude-sonnet-4.5",
          "status": "completed",
          "executionId": "exec_claude_001",
          "startedAt": "2025-11-21T10:30:05.000Z",
          "completedAt": "2025-11-21T10:32:15.000Z",
          "commits": [
            {
              "sha": "abc123def456",
              "message": "Add Stripe payments",
              "author": "Claude Agent",
              "timestamp": "2025-11-21T10:32:10.000Z"
            }
          ],
          "filesChanged": 1,
          "linesAdded": 156,
          "linesRemoved": 0,
          "error": null,
          "result": {
            "summary": "Added Stripe Payment",
            "files": []
          }
        },
        {
          "agent": "blackbox",
          "model": "blackboxai/blackbox-pro",
          "status": "completed",
          "executionId": "exec_blackbox_001",
          "startedAt": "2025-11-21T10:30:05.000Z",
          "completedAt": "2025-11-21T10:31:45.000Z",
          "commits": [
            {
              "sha": "def456ghi789",
              "message": "Added Stripe Payment",
              "author": "BLACKBOX Agent",
              "timestamp": "2025-11-21T10:31:40.000Z"
            }
          ],
          "filesChanged": 1,
          "linesAdded": 142,
          "linesRemoved": 0,
          "error": null,
          "result": {
            "summary": "Added Stripe Payment",
            "files": []
          }
        }
      ],
      "completedAt": "2025-11-21T10:32:15.000Z"
    }
  }
  ```

  ```json Error Response theme={null}
  {
    "error": "Invalid selectedAgents configuration",
    "message": "selectedAgents must be an array with at least 2 agent configurations",
    "status": 400
  }
  ```
</ResponseExample>

## Best Practices

### Agent Selection

**Diverse Models**: Choose agents with different strengths

```json  theme={null}
{
  "selectedAgents": [
    { "agent": "claude", "model": "blackboxai/anthropic/claude-sonnet-4.5" },  // Great for complex reasoning
    { "agent": "codex", "model": "gpt-5-codex" },                              // Excellent for code generation
    { "agent": "gemini", "model": "gemini-2.0-flash-exp" }                     // Fast and efficient
  ]
}
```

**Similar Models**: Compare variations of the same model family

```json  theme={null}
{
  "selectedAgents": [
    { "agent": "claude", "model": "blackboxai/anthropic/claude-sonnet-4.5" },
    { "agent": "claude", "model": "blackboxai/anthropic/claude-opus-4.5" }
  ]
}
```

### Use Cases

**Complex Refactoring**: Get multiple approaches to restructuring code

```json  theme={null}
{
  "prompt": "Refactor the authentication module to use dependency injection",
  "selectedAgents": [/* 3-4 different agents */]
}
```

**Critical Features**: Validate implementation across multiple agents

```json  theme={null}
{
  "prompt": "Implement payment processing with Stripe integration",
  "selectedAgents": [/* 2-3 agents for validation */]
}
```

**Documentation**: Compare documentation styles and completeness

```json  theme={null}
{
  "prompt": "Add comprehensive API documentation",
  "selectedAgents": [/* 2-3 agents */]
}
```

### Performance Tips

1. **Optimal Agent Count**: Use 2-3 agents for most tasks, up to 5 for critical comparisons
2. **Task Complexity**: More complex tasks benefit more from multi-agent approach
3. **Resource Awareness**: Multi-agent tasks consume more credits and take longer
4. **Result Analysis**: Focus on comparing approach and quality, not just output
5. **Polling Frequency**: Check status every 5-10 seconds to avoid rate limits

## Comparison Metrics

When comparing agent results, consider:

* **Code Quality**: Readability, maintainability, best practices
* **Completeness**: Does it fully address the prompt?
* **Efficiency**: Performance and resource usage
* **Error Handling**: Robustness and edge case coverage
* **Documentation**: Code comments and explanations
* **Testing**: Test coverage and quality
* **Consistency**: Adherence to project conventions

## Limitations

* **Minimum Agents**: At least 2 agents required
* **Maximum Agents**: Up to 5 agents recommended
* **Execution Time**: Longer than single-agent tasks
* **Credit Usage**: Consumes credits for each agent execution
* **Conflicts**: Agents may create conflicting changes (manual merge may be needed)

## Related Endpoints

* [Create Single Agent Task](/api-reference/task) - Standard single-agent task execution

## Error Codes

| Status Code | Error                 | Description                                                          |
| ----------- | --------------------- | -------------------------------------------------------------------- |
| 200         | Success               | Multi-agent task created successfully                                |
| 400         | Bad Request           | Invalid request (missing prompt, invalid agents, less than 2 agents) |
| 401         | Unauthorized          | Invalid or missing API key                                           |
| 402         | Payment Required      | Insufficient credits to create task                                  |
| 403         | Forbidden             | User is not a member of the selected team                            |
| 404         | Not Found             | GitHub token not found or user not found                             |
| 500         | Internal Server Error | Task creation failed or database error                               |
| 502         | Bad Gateway           | GitHub API error or file upload failed                               |
