> ## Documentation Index
> Fetch the complete documentation index at: https://docs.blackbox.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# LLM Inference

> Explore the AI models available for conversational tasks, text generation, and complex reasoning.

export const SearchableModels = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [models] = React.useState([{
    "id": "blackboxai/anthropic/claude-sonnet-4.5",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude Sonnet 4.5"
  }, {
    "id": "blackboxai/anthropic/claude-opus-4.5",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude Opus 4.5"
  }, {
    "id": "blackboxai/openai/gpt-5.2-codex",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5.2 Codex"
  }, {
    "id": "blackboxai/google/gemini-3-pro-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 3 Pro Preview"
  }, {
    "id": "blackboxai/01-ai/yi-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "01-ai: Yi Large"
  }, {
    "id": "blackboxai/aetherwiing/mn-starcannon-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Aetherwiing: Mn Starcannon 12b"
  }, {
    "id": "blackboxai/agentica-org/deepcoder-14b-preview:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Agentica-org: Deepcoder 14b Preview"
  }, {
    "id": "blackboxai/ai21/jamba-1.6-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ai21: Jamba 1.6 Large"
  }, {
    "id": "blackboxai/ai21/jamba-1.6-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ai21: Jamba 1.6 Mini"
  }, {
    "id": "blackboxai/aion-labs/aion-1.0",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Aion-labs: Aion 1.0"
  }, {
    "id": "blackboxai/aion-labs/aion-1.0-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Aion-labs: Aion 1.0 Mini"
  }, {
    "id": "blackboxai/aion-labs/aion-rp-llama-3.1-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Aion-labs: Aion Rp Llama 3.1 8b"
  }, {
    "id": "blackboxai/alfredpros/codellama-7b-instruct-solidity",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Alfredpros: Codellama 7b Instruct Solidity"
  }, {
    "id": "blackboxai/all-hands/openhands-lm-32b-v0.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "All-hands: Openhands Lm 32b V0.1"
  }, {
    "id": "blackboxai/alpindale/goliath-120b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Alpindale: Goliath 120b"
  }, {
    "id": "blackboxai/alpindale/magnum-72b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Alpindale: Magnum 72b"
  }, {
    "id": "blackboxai/amazon/nova-lite-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Amazon: Nova Lite V1"
  }, {
    "id": "blackboxai/amazon/nova-micro-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Amazon: Nova Micro V1"
  }, {
    "id": "blackboxai/amazon/nova-pro-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Amazon: Nova Pro V1"
  }, {
    "id": "blackboxai/anthracite-org/magnum-v2-72b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthracite-org: Magnum V2 72b"
  }, {
    "id": "blackboxai/anthracite-org/magnum-v4-72b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthracite-org: Magnum V4 72b"
  }, {
    "id": "blackboxai/anthropic/claude-2:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 2"
  }, {
    "id": "blackboxai/anthropic/claude-2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 2"
  }, {
    "id": "blackboxai/anthropic/claude-2.0",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 2.0"
  }, {
    "id": "blackboxai/anthropic/claude-2.0:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 2.0"
  }, {
    "id": "blackboxai/anthropic/claude-2.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 2.1"
  }, {
    "id": "blackboxai/anthropic/claude-2.1:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 2.1"
  }, {
    "id": "blackboxai/anthropic/claude-3-haiku:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3 Haiku"
  }, {
    "id": "blackboxai/anthropic/claude-3-haiku",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3 Haiku"
  }, {
    "id": "blackboxai/anthropic/claude-3-opus:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3 Opus"
  }, {
    "id": "blackboxai/anthropic/claude-3-opus",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3 Opus"
  }, {
    "id": "blackboxai/anthropic/claude-3-sonnet:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-3-sonnet",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-haiku:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Haiku"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-haiku",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Haiku"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-haiku-20241022:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Haiku 20241022"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-haiku-20241022",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Haiku 20241022"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-sonnet",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-sonnet:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-sonnet-20240620",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Sonnet 20240620"
  }, {
    "id": "blackboxai/anthropic/claude-3.5-sonnet-20240620:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.5 Sonnet 20240620"
  }, {
    "id": "blackboxai/anthropic/claude-3.7-sonnet:thinking",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.7 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-3.7-sonnet",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.7 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-3.7-sonnet:beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude 3.7 Sonnet"
  }, {
    "id": "blackboxai/anthropic/claude-haiku-4.5",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude Haiku 4.5"
  }, {
    "id": "blackboxai/anthropic/claude-opus-4",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude Opus 4"
  }, {
    "id": "blackboxai/anthropic/claude-sonnet-4",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Anthropic: Claude Sonnet 4"
  }, {
    "id": "blackboxai/arcee-ai/arcee-blitz",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Arcee Blitz"
  }, {
    "id": "blackboxai/arcee-ai/caller-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Caller Large"
  }, {
    "id": "blackboxai/arcee-ai/coder-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Coder Large"
  }, {
    "id": "blackboxai/arcee-ai/maestro-reasoning",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Maestro Reasoning"
  }, {
    "id": "blackboxai/arcee-ai/spotlight",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Spotlight"
  }, {
    "id": "blackboxai/arcee-ai/virtuoso-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Virtuoso Large"
  }, {
    "id": "blackboxai/arcee-ai/virtuoso-medium-v2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arcee-ai: Virtuoso Medium V2"
  }, {
    "id": "blackboxai/arliai/qwq-32b-arliai-rpr-v1:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Arliai: Qwq 32b Arliai Rpr V1"
  }, {
    "id": "blackboxai/baidu/ernie-4.5-300b-a47b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Baidu: Ernie 4.5 300b A47b"
  }, {
    "id": "blackboxai/black-forest-labs/flux-1.1-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Black-forest-labs: Flux 1.1 Pro"
  }, {
    "id": "blackboxai/black-forest-labs/flux-1.1-pro-ultra",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Black-forest-labs: Flux 1.1 Pro Ultra"
  }, {
    "id": "blackboxai/black-forest-labs/flux-dev",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Black-forest-labs: Flux Dev"
  }, {
    "id": "blackboxai/black-forest-labs/flux-kontext-max",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Black-forest-labs: Flux Kontext Max"
  }, {
    "id": "blackboxai/black-forest-labs/flux-kontext-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Black-forest-labs: Flux Kontext Pro"
  }, {
    "id": "blackboxai/black-forest-labs/flux-schnell",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Black-forest-labs: Flux Schnell"
  }, {
    "id": "blackboxai/blackbox-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Blackbox Pro"
  }, {
    "id": "blackboxai/blackbox-search",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Blackbox Search"
  }, {
    "id": "blackboxai/cogvideox-5b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Cogvideox 5b"
  }, {
    "id": "blackboxai/fast-animatediff",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Fast Animatediff"
  }, {
    "id": "blackboxai/fast-svd",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Fast Svd"
  }, {
    "id": "blackboxai/fast-svd-lcm",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Fast Svd Lcm"
  }, {
    "id": "blackboxai/gemini-flash-edit",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Gemini Flash Edit"
  }, {
    "id": "blackboxai/hunyuan-video-lora",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Hunyuan Video Lora"
  }, {
    "id": "blackboxai/mochi-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Mochi V1"
  }, {
    "id": "blackboxai/qwen3-coder",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Qwen3 Coder"
  }, {
    "id": "blackboxai/qwen3-max",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Qwen3 Max"
  }, {
    "id": "blackboxai/qwen3-vl-235b-a22b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Qwen3 Vl 235b A22b"
  }, {
    "id": "blackboxai/qwen3-vl-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Qwen3 Vl 32b"
  }, {
    "id": "blackboxai/ray-2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Ray 2"
  }, {
    "id": "blackboxai/sora-2-image-to-video",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Sora 2 Image To Video"
  }, {
    "id": "blackboxai/sora-2-image-to-video-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Sora 2 Image To Video Pro"
  }, {
    "id": "blackboxai/sora-2-text-to-video",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Sora 2 Text To Video"
  }, {
    "id": "blackboxai/sora-2-text-to-video-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Sora 2 Text To Video Pro"
  }, {
    "id": "blackboxai/sora-2-video-remix",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Sora 2 Video Remix"
  }, {
    "id": "blackboxai/veo-3.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Veo 3.1"
  }, {
    "id": "blackboxai/veo-3.1-fast",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Blackboxai: Veo 3.1 Fast"
  }, {
    "id": "blackboxai/bria/fibo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Bria: Fibo"
  }, {
    "id": "blackboxai/bria/image-3.2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Bria: Image 3.2"
  }, {
    "id": "blackboxai/bytedance/seedream-3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Bytedance: Seedream 3"
  }, {
    "id": "blackboxai/bytedance/seedream-4",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Bytedance: Seedream 4"
  }, {
    "id": "blackboxai/cognitivecomputations/dolphin-mixtral-8x22b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cognitivecomputations: Dolphin Mixtral 8x22b"
  }, {
    "id": "blackboxai/cognitivecomputations/dolphin3.0-mistral-24b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cognitivecomputations: Dolphin3.0 Mistral 24b"
  }, {
    "id": "blackboxai/cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cognitivecomputations: Dolphin3.0 R1 Mistral 24b"
  }, {
    "id": "blackboxai/cohere/command",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command"
  }, {
    "id": "blackboxai/cohere/command-a",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command A"
  }, {
    "id": "blackboxai/cohere/command-r",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R"
  }, {
    "id": "blackboxai/cohere/command-r-03-2024",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R 03 2024"
  }, {
    "id": "blackboxai/cohere/command-r-08-2024",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R 08 2024"
  }, {
    "id": "blackboxai/cohere/command-r-plus",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R Plus"
  }, {
    "id": "blackboxai/cohere/command-r-plus-04-2024",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R Plus 04 2024"
  }, {
    "id": "blackboxai/cohere/command-r-plus-08-2024",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R Plus 08 2024"
  }, {
    "id": "blackboxai/cohere/command-r7b-12-2024",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Cohere: Command R7b 12 2024"
  }, {
    "id": "blackboxai/deepseek/deepseek-chat:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek Chat"
  }, {
    "id": "blackboxai/deepseek/deepseek-chat",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek Chat"
  }, {
    "id": "blackboxai/deepseek/deepseek-chat-v3-0324",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek Chat V3 0324"
  }, {
    "id": "blackboxai/deepseek/deepseek-chat-v3-0324:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek Chat V3 0324"
  }, {
    "id": "blackboxai/deepseek/deepseek-prover-v2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek Prover V2"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-0528:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 0528"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-0528",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 0528"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-0528-qwen3-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 0528 Qwen3 8b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-0528-qwen3-8b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 0528 Qwen3 8b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-llama-70b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Llama 70b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-llama-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Llama 70b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-llama-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Llama 8b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-qwen-1.5b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Qwen 1.5b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-qwen-14b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Qwen 14b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-qwen-14b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Qwen 14b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-qwen-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Qwen 32b"
  }, {
    "id": "blackboxai/deepseek/deepseek-r1-distill-qwen-7b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek R1 Distill Qwen 7b"
  }, {
    "id": "blackboxai/deepseek/deepseek-v3-base:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Deepseek: Deepseek V3 Base"
  }, {
    "id": "blackboxai/eleutherai/llemma_7b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Eleutherai: Llemma_7b"
  }, {
    "id": "blackboxai/eva-unit-01/eva-llama-3.33-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Eva-unit-01: Eva Llama 3.33 70b"
  }, {
    "id": "blackboxai/eva-unit-01/eva-qwen-2.5-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Eva-unit-01: Eva Qwen 2.5 32b"
  }, {
    "id": "blackboxai/eva-unit-01/eva-qwen-2.5-72b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Eva-unit-01: Eva Qwen 2.5 72b"
  }, {
    "id": "blackboxai/featherless/qwerky-72b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Featherless: Qwerky 72b"
  }, {
    "id": "blackboxai/gemini-25-flash-image/edit",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Gemini-25-flash-image: Edit"
  }, {
    "id": "blackboxai/gemini-3-pro-image-preview/edit",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Gemini-3-pro-image-preview: Edit"
  }, {
    "id": "blackboxai/gemini-flash-edit/multi",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Gemini-flash-edit: Multi"
  }, {
    "id": "blackboxai/google/gemini-2.0-flash-001",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.0 Flash 001"
  }, {
    "id": "blackboxai/google/gemini-2.0-flash-exp:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.0 Flash Exp"
  }, {
    "id": "blackboxai/google/gemini-2.0-flash-lite-001",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.0 Flash Lite 001"
  }, {
    "id": "blackboxai/google/gemini-2.5-flash",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Flash"
  }, {
    "id": "blackboxai/google/gemini-2.5-flash-lite-preview-06-17",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Flash Lite Preview 06 17"
  }, {
    "id": "blackboxai/google/gemini-2.5-flash-preview:thinking",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Flash Preview"
  }, {
    "id": "blackboxai/google/gemini-2.5-flash-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Flash Preview"
  }, {
    "id": "blackboxai/google/gemini-2.5-flash-preview-05-20:thinking",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Flash Preview 05 20"
  }, {
    "id": "blackboxai/google/gemini-2.5-flash-preview-05-20",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Flash Preview 05 20"
  }, {
    "id": "blackboxai/google/gemini-2.5-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Pro"
  }, {
    "id": "blackboxai/google/gemini-2.5-pro-exp-03-25",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Pro Exp 03 25"
  }, {
    "id": "blackboxai/google/gemini-2.5-pro-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Pro Preview"
  }, {
    "id": "blackboxai/google/gemini-2.5-pro-preview-05-06",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini 2.5 Pro Preview 05 06"
  }, {
    "id": "blackboxai/google/gemini-flash-1.5",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini Flash 1.5"
  }, {
    "id": "blackboxai/google/gemini-flash-1.5-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini Flash 1.5 8b"
  }, {
    "id": "blackboxai/google/gemini-pro-1.5",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemini Pro 1.5"
  }, {
    "id": "blackboxai/google/gemma-2-27b-it",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 2 27b It"
  }, {
    "id": "blackboxai/google/gemma-2-9b-it",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 2 9b It"
  }, {
    "id": "blackboxai/google/gemma-2-9b-it:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 2 9b It"
  }, {
    "id": "blackboxai/google/gemma-3-12b-it",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3 12b It"
  }, {
    "id": "blackboxai/google/gemma-3-12b-it:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3 12b It"
  }, {
    "id": "blackboxai/google/gemma-3-27b-it",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3 27b It"
  }, {
    "id": "blackboxai/google/gemma-3-27b-it:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3 27b It"
  }, {
    "id": "blackboxai/google/gemma-3-4b-it",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3 4b It"
  }, {
    "id": "blackboxai/google/gemma-3-4b-it:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3 4b It"
  }, {
    "id": "blackboxai/google/gemma-3n-e4b-it",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3n E4b It"
  }, {
    "id": "blackboxai/google/gemma-3n-e4b-it:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Gemma 3n E4b It"
  }, {
    "id": "blackboxai/google/imagen-3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Imagen 3"
  }, {
    "id": "blackboxai/google/imagen-3-fast",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Imagen 3 Fast"
  }, {
    "id": "blackboxai/google/imagen-4",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Imagen 4"
  }, {
    "id": "blackboxai/google/imagen-4-fast",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Imagen 4 Fast"
  }, {
    "id": "blackboxai/google/imagen-4-ultra",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Imagen 4 Ultra"
  }, {
    "id": "blackboxai/google/nano-banana",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Nano Banana"
  }, {
    "id": "blackboxai/google/nano-banana-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Nano Banana Pro"
  }, {
    "id": "blackboxai/google/veo-2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Veo 2"
  }, {
    "id": "blackboxai/google/veo-3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Veo 3"
  }, {
    "id": "blackboxai/google/veo-3-fast",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Google: Veo 3 Fast"
  }, {
    "id": "blackboxai/gpt-image-1-mini/edit",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Gpt-image-1-mini: Edit"
  }, {
    "id": "blackboxai/gpt-image-1/edit-image",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Gpt-image-1: Edit Image"
  }, {
    "id": "blackboxai/gryphe/mythomax-l2-13b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Gryphe: Mythomax L2 13b"
  }, {
    "id": "blackboxai/ideogram-ai/ideogram-v2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ideogram-ai: Ideogram V2"
  }, {
    "id": "blackboxai/ideogram-ai/ideogram-v2-turbo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ideogram-ai: Ideogram V2 Turbo"
  }, {
    "id": "blackboxai/ideogram-ai/ideogram-v2a",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ideogram-ai: Ideogram V2a"
  }, {
    "id": "blackboxai/ideogram-ai/ideogram-v2a-turbo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ideogram-ai: Ideogram V2a Turbo"
  }, {
    "id": "blackboxai/ideogram-ai/ideogram-v3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Ideogram-ai: Ideogram V3"
  }, {
    "id": "blackboxai/inception/mercury",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Inception: Mercury"
  }, {
    "id": "blackboxai/inception/mercury-coder",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Inception: Mercury Coder"
  }, {
    "id": "blackboxai/infermatic/mn-inferor-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Infermatic: Mn Inferor 12b"
  }, {
    "id": "blackboxai/inflection/inflection-3-pi",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Inflection: Inflection 3 Pi"
  }, {
    "id": "blackboxai/inflection/inflection-3-productivity",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Inflection: Inflection 3 Productivity"
  }, {
    "id": "blackboxai/liquid/lfm-3b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Liquid: Lfm 3b"
  }, {
    "id": "blackboxai/liquid/lfm-40b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Liquid: Lfm 40b"
  }, {
    "id": "blackboxai/liquid/lfm-7b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Liquid: Lfm 7b"
  }, {
    "id": "blackboxai/lucataco/dreamshaper",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Lucataco: Dreamshaper"
  }, {
    "id": "blackboxai/luma/photon",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Luma: Photon"
  }, {
    "id": "blackboxai/luma/photon-flash",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Luma: Photon Flash"
  }, {
    "id": "blackboxai/mancer/weaver",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mancer: Weaver"
  }, {
    "id": "blackboxai/meta-llama/llama-3-70b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3 70b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3-8b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3 8b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.1-405b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.1 405b"
  }, {
    "id": "blackboxai/meta-llama/llama-3.1-405b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.1 405b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.1-70b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.1 70b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.1-8b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.1 8b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.2-11b-vision-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.2 11b Vision Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.2-11b-vision-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.2 11b Vision Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.2-1b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.2 1b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.2-3b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.2 3b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.2-90b-vision-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.2 90b Vision Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.3-70b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.3 70b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-3.3-70b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 3.3 70b Instruct"
  }, {
    "id": "blackboxai/meta-llama/llama-4-maverick",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 4 Maverick"
  }, {
    "id": "blackboxai/meta-llama/llama-4-maverick:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 4 Maverick"
  }, {
    "id": "blackboxai/meta-llama/llama-4-scout:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 4 Scout"
  }, {
    "id": "blackboxai/meta-llama/llama-4-scout",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama 4 Scout"
  }, {
    "id": "blackboxai/meta-llama/llama-guard-2-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama Guard 2 8b"
  }, {
    "id": "blackboxai/meta-llama/llama-guard-3-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama Guard 3 8b"
  }, {
    "id": "blackboxai/meta-llama/llama-guard-4-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Meta-llama: Llama Guard 4 12b"
  }, {
    "id": "blackboxai/microsoft/mai-ds-r1:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Mai Ds R1"
  }, {
    "id": "blackboxai/microsoft/phi-3-medium-128k-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Phi 3 Medium 128k Instruct"
  }, {
    "id": "blackboxai/microsoft/phi-3-mini-128k-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Phi 3 Mini 128k Instruct"
  }, {
    "id": "blackboxai/microsoft/phi-3.5-mini-128k-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Phi 3.5 Mini 128k Instruct"
  }, {
    "id": "blackboxai/microsoft/phi-4",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Phi 4"
  }, {
    "id": "blackboxai/microsoft/phi-4-multimodal-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Phi 4 Multimodal Instruct"
  }, {
    "id": "blackboxai/microsoft/phi-4-reasoning-plus",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Phi 4 Reasoning Plus"
  }, {
    "id": "blackboxai/microsoft/wizardlm-2-8x22b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Microsoft: Wizardlm 2 8x22b"
  }, {
    "id": "blackboxai/minimax/image-01",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Minimax: Image 01"
  }, {
    "id": "blackboxai/minimax/minimax-01",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Minimax: Minimax 01"
  }, {
    "id": "blackboxai/minimax/minimax-free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Minimax: Minimax Free"
  }, {
    "id": "blackboxai/minimax/minimax-m1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Minimax: Minimax M1"
  }, {
    "id": "blackboxai/minimax/minimax-m2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Minimax: Minimax M2"
  }, {
    "id": "blackboxai/minimax/minimax-m2.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Minimax: Minimax M2.1"
  }, {
    "id": "blackboxai/mistralai/codestral-2501",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Codestral 2501"
  }, {
    "id": "blackboxai/mistralai/devstral-2512",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Devstral 2512"
  }, {
    "id": "blackboxai/mistralai/devstral-2512:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Devstral 2512"
  }, {
    "id": "blackboxai/mistralai/magistral-medium-2506",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Magistral Medium 2506"
  }, {
    "id": "blackboxai/mistralai/magistral-medium-2506:thinking",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Magistral Medium 2506"
  }, {
    "id": "blackboxai/mistralai/magistral-small-2506",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Magistral Small 2506"
  }, {
    "id": "blackboxai/mistralai/ministral-3b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Ministral 3b"
  }, {
    "id": "blackboxai/mistralai/ministral-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Ministral 8b"
  }, {
    "id": "blackboxai/mistralai/mistral-7b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral 7b Instruct"
  }, {
    "id": "blackboxai/mistralai/mistral-7b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral 7b Instruct"
  }, {
    "id": "blackboxai/mistralai/mistral-7b-instruct-v0.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral 7b Instruct V0.1"
  }, {
    "id": "blackboxai/mistralai/mistral-7b-instruct-v0.2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral 7b Instruct V0.2"
  }, {
    "id": "blackboxai/mistralai/mistral-7b-instruct-v0.3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral 7b Instruct V0.3"
  }, {
    "id": "blackboxai/mistralai/mistral-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Large"
  }, {
    "id": "blackboxai/mistralai/mistral-large-2407",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Large 2407"
  }, {
    "id": "blackboxai/mistralai/mistral-large-2411",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Large 2411"
  }, {
    "id": "blackboxai/mistralai/mistral-large-2512",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Large 2512"
  }, {
    "id": "blackboxai/mistralai/mistral-medium-3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Medium 3"
  }, {
    "id": "blackboxai/mistralai/mistral-nemo:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Nemo"
  }, {
    "id": "blackboxai/mistralai/mistral-nemo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Nemo"
  }, {
    "id": "blackboxai/mistralai/mistral-saba",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Saba"
  }, {
    "id": "blackboxai/mistralai/mistral-small",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Small"
  }, {
    "id": "blackboxai/mistralai/mistral-small-24b-instruct-2501",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Small 24b Instruct 2501"
  }, {
    "id": "blackboxai/mistralai/mistral-small-3.1-24b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Small 3.1 24b Instruct"
  }, {
    "id": "blackboxai/mistralai/mistral-small-3.1-24b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Small 3.1 24b Instruct"
  }, {
    "id": "blackboxai/mistralai/mistral-small-3.2-24b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Small 3.2 24b Instruct"
  }, {
    "id": "blackboxai/mistralai/mistral-small-3.2-24b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Small 3.2 24b Instruct"
  }, {
    "id": "blackboxai/mistralai/mistral-tiny",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mistral Tiny"
  }, {
    "id": "blackboxai/mistralai/mixtral-8x22b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mixtral 8x22b Instruct"
  }, {
    "id": "blackboxai/mistralai/mixtral-8x7b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Mixtral 8x7b Instruct"
  }, {
    "id": "blackboxai/mistralai/pixtral-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Pixtral 12b"
  }, {
    "id": "blackboxai/mistralai/pixtral-large-2411",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Mistralai: Pixtral Large 2411"
  }, {
    "id": "blackboxai/moonshotai/kimi-dev-72b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Moonshotai: Kimi Dev 72b"
  }, {
    "id": "blackboxai/moonshotai/kimi-vl-a3b-thinking:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Moonshotai: Kimi Vl A3b Thinking"
  }, {
    "id": "blackboxai/morph/morph-v2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Morph: Morph V2"
  }, {
    "id": "blackboxai/nano-banana-pro/edit",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nano-banana-pro: Edit"
  }, {
    "id": "blackboxai/nano-banana/edit",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nano-banana: Edit"
  }, {
    "id": "blackboxai/neversleep/llama-3-lumimaid-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Neversleep: Llama 3 Lumimaid 70b"
  }, {
    "id": "blackboxai/neversleep/llama-3-lumimaid-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Neversleep: Llama 3 Lumimaid 8b"
  }, {
    "id": "blackboxai/neversleep/llama-3.1-lumimaid-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Neversleep: Llama 3.1 Lumimaid 70b"
  }, {
    "id": "blackboxai/neversleep/llama-3.1-lumimaid-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Neversleep: Llama 3.1 Lumimaid 8b"
  }, {
    "id": "blackboxai/neversleep/noromaid-20b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Neversleep: Noromaid 20b"
  }, {
    "id": "blackboxai/nothingiisreal/mn-celeste-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nothingiisreal: Mn Celeste 12b"
  }, {
    "id": "blackboxai/nousresearch/deephermes-3-llama-3-8b-preview:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nousresearch: Deephermes 3 Llama 3 8b Preview"
  }, {
    "id": "blackboxai/nousresearch/hermes-2-pro-llama-3-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nousresearch: Hermes 2 Pro Llama 3 8b"
  }, {
    "id": "blackboxai/nousresearch/hermes-3-llama-3.1-405b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nousresearch: Hermes 3 Llama 3.1 405b"
  }, {
    "id": "blackboxai/nousresearch/hermes-3-llama-3.1-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nousresearch: Hermes 3 Llama 3.1 70b"
  }, {
    "id": "blackboxai/nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nousresearch: Nous Hermes 2 Mixtral 8x7b Dpo"
  }, {
    "id": "blackboxai/nvidia/llama-3.1-nemotron-70b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Llama 3.1 Nemotron 70b Instruct"
  }, {
    "id": "blackboxai/nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Llama 3.1 Nemotron Ultra 253b V1"
  }, {
    "id": "blackboxai/nvidia/llama-3.1-nemotron-ultra-253b-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Llama 3.1 Nemotron Ultra 253b V1"
  }, {
    "id": "blackboxai/nvidia/llama-3.3-nemotron-super-49b-v1:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Llama 3.3 Nemotron Super 49b V1"
  }, {
    "id": "blackboxai/nvidia/llama-3.3-nemotron-super-49b-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Llama 3.3 Nemotron Super 49b V1"
  }, {
    "id": "blackboxai/nvidia/sana",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Sana"
  }, {
    "id": "blackboxai/nvidia/sana-sprint-1.6b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Nvidia: Sana Sprint 1.6b"
  }, {
    "id": "blackboxai/openai/chatgpt-4o-latest",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Chatgpt 4o Latest"
  }, {
    "id": "blackboxai/openai/codex-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Codex Mini"
  }, {
    "id": "blackboxai/openai/gpt-3.5-turbo-0613",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 3.5 Turbo 0613"
  }, {
    "id": "blackboxai/openai/gpt-3.5-turbo-16k",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 3.5 Turbo 16k"
  }, {
    "id": "blackboxai/openai/gpt-3.5-turbo-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 3.5 Turbo Instruct"
  }, {
    "id": "blackboxai/openai/gpt-4",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4"
  }, {
    "id": "blackboxai/openai/gpt-4-0314",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4 0314"
  }, {
    "id": "blackboxai/openai/gpt-4-1106-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4 1106 Preview"
  }, {
    "id": "blackboxai/openai/gpt-4-turbo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4 Turbo"
  }, {
    "id": "blackboxai/openai/gpt-4-turbo-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4 Turbo Preview"
  }, {
    "id": "blackboxai/openai/gpt-4.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4.1"
  }, {
    "id": "blackboxai/openai/gpt-4.1-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4.1 Mini"
  }, {
    "id": "blackboxai/openai/gpt-4.1-nano",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4.1 Nano"
  }, {
    "id": "blackboxai/openai/gpt-4.5-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4.5 Preview"
  }, {
    "id": "blackboxai/openai/gpt-4o",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o"
  }, {
    "id": "blackboxai/openai/gpt-4o:extended",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o"
  }, {
    "id": "blackboxai/openai/gpt-4o-2024-05-13",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o 2024 05 13"
  }, {
    "id": "blackboxai/openai/gpt-4o-2024-08-06",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o 2024 08 06"
  }, {
    "id": "blackboxai/openai/gpt-4o-2024-11-20",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o 2024 11 20"
  }, {
    "id": "blackboxai/openai/gpt-4o-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o Mini"
  }, {
    "id": "blackboxai/openai/gpt-4o-mini-2024-07-18",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o Mini 2024 07 18"
  }, {
    "id": "blackboxai/openai/gpt-4o-mini-search-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o Mini Search Preview"
  }, {
    "id": "blackboxai/openai/gpt-4o-search-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 4o Search Preview"
  }, {
    "id": "blackboxai/openai/gpt-5",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5"
  }, {
    "id": "blackboxai/openai/gpt-5-codex",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5 Codex"
  }, {
    "id": "blackboxai/openai/gpt-5-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5 Mini"
  }, {
    "id": "blackboxai/openai/gpt-5-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5 Pro"
  }, {
    "id": "blackboxai/openai/gpt-5.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5.1"
  }, {
    "id": "blackboxai/openai/gpt-5.1-codex",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5.1 Codex"
  }, {
    "id": "blackboxai/openai/gpt-5.2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5.2"
  }, {
    "id": "blackboxai/openai/gpt-5.2-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: Gpt 5.2 Pro"
  }, {
    "id": "blackboxai/openai/o1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O1"
  }, {
    "id": "blackboxai/openai/o1-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O1 Mini"
  }, {
    "id": "blackboxai/openai/o1-mini-2024-09-12",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O1 Mini 2024 09 12"
  }, {
    "id": "blackboxai/openai/o1-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O1 Preview"
  }, {
    "id": "blackboxai/openai/o1-preview-2024-09-12",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O1 Preview 2024 09 12"
  }, {
    "id": "blackboxai/openai/o1-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O1 Pro"
  }, {
    "id": "blackboxai/openai/o3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O3"
  }, {
    "id": "blackboxai/openai/o3-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O3 Mini"
  }, {
    "id": "blackboxai/openai/o3-mini-high",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O3 Mini High"
  }, {
    "id": "blackboxai/openai/o3-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O3 Pro"
  }, {
    "id": "blackboxai/openai/o4-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O4 Mini"
  }, {
    "id": "blackboxai/openai/o4-mini-high",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Openai: O4 Mini High"
  }, {
    "id": "blackboxai/opengvlab/internvl3-14b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Opengvlab: Internvl3 14b"
  }, {
    "id": "blackboxai/opengvlab/internvl3-2b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Opengvlab: Internvl3 2b"
  }, {
    "id": "blackboxai/perplexity/llama-3.1-sonar-large-128k-online",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Llama 3.1 Sonar Large 128k Online"
  }, {
    "id": "blackboxai/perplexity/llama-3.1-sonar-small-128k-online",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Llama 3.1 Sonar Small 128k Online"
  }, {
    "id": "blackboxai/perplexity/r1-1776",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: R1 1776"
  }, {
    "id": "blackboxai/perplexity/sonar",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Sonar"
  }, {
    "id": "blackboxai/perplexity/sonar-deep-research",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Sonar Deep Research"
  }, {
    "id": "blackboxai/perplexity/sonar-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Sonar Pro"
  }, {
    "id": "blackboxai/perplexity/sonar-reasoning",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Sonar Reasoning"
  }, {
    "id": "blackboxai/perplexity/sonar-reasoning-pro",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Perplexity: Sonar Reasoning Pro"
  }, {
    "id": "blackboxai/playgroundai/playground-v25",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Playgroundai: Playground V25"
  }, {
    "id": "blackboxai/prunaai/hidream-l1-dev",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Prunaai: Hidream L1 Dev"
  }, {
    "id": "blackboxai/prunaai/hidream-l1-fast",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Prunaai: Hidream L1 Fast"
  }, {
    "id": "blackboxai/prunaai/hidream-l1-full",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Prunaai: Hidream L1 Full"
  }, {
    "id": "blackboxai/prunaai/wan-2.2-image",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Prunaai: Wan 2.2 Image"
  }, {
    "id": "blackboxai/pygmalionai/mythalion-13b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Pygmalionai: Mythalion 13b"
  }, {
    "id": "blackboxai/qwen/qwen-2-72b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2 72b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-2.5-72b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2.5 72b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-2.5-72b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2.5 72b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-2.5-7b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2.5 7b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-2.5-coder-32b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2.5 Coder 32b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-2.5-coder-32b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2.5 Coder 32b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-2.5-vl-7b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen 2.5 Vl 7b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen-image",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen Image"
  }, {
    "id": "blackboxai/qwen/qwen-max",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen Max"
  }, {
    "id": "blackboxai/qwen/qwen-plus",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen Plus"
  }, {
    "id": "blackboxai/qwen/qwen-turbo",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen Turbo"
  }, {
    "id": "blackboxai/qwen/qwen-vl-max",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen Vl Max"
  }, {
    "id": "blackboxai/qwen/qwen-vl-plus",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen Vl Plus"
  }, {
    "id": "blackboxai/qwen/qwen2.5-vl-32b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen2.5 Vl 32b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen2.5-vl-32b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen2.5 Vl 32b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen2.5-vl-72b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen2.5 Vl 72b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen2.5-vl-72b-instruct:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen2.5 Vl 72b Instruct"
  }, {
    "id": "blackboxai/qwen/qwen3-14b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 14b"
  }, {
    "id": "blackboxai/qwen/qwen3-14b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 14b"
  }, {
    "id": "blackboxai/qwen/qwen3-235b-a22b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 235b A22b"
  }, {
    "id": "blackboxai/qwen/qwen3-235b-a22b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 235b A22b"
  }, {
    "id": "blackboxai/qwen/qwen3-30b-a3b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 30b A3b"
  }, {
    "id": "blackboxai/qwen/qwen3-30b-a3b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 30b A3b"
  }, {
    "id": "blackboxai/qwen/qwen3-32b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 32b"
  }, {
    "id": "blackboxai/qwen/qwen3-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 32b"
  }, {
    "id": "blackboxai/qwen/qwen3-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 8b"
  }, {
    "id": "blackboxai/qwen/qwen3-8b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwen3 8b"
  }, {
    "id": "blackboxai/qwen/qwq-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwq 32b"
  }, {
    "id": "blackboxai/qwen/qwq-32b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwq 32b"
  }, {
    "id": "blackboxai/qwen/qwq-32b-preview",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Qwen: Qwq 32b Preview"
  }, {
    "id": "blackboxai/raifle/sorcererlm-8x22b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Raifle: Sorcererlm 8x22b"
  }, {
    "id": "blackboxai/recraft-ai/recraft-v3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Recraft-ai: Recraft V3"
  }, {
    "id": "blackboxai/recraft-ai/recraft-v3-svg",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Recraft-ai: Recraft V3 Svg"
  }, {
    "id": "blackboxai/rekaai/reka-flash-3:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Rekaai: Reka Flash 3"
  }, {
    "id": "blackboxai/sao10k/fimbulvetr-11b-v2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sao10k: Fimbulvetr 11b V2"
  }, {
    "id": "blackboxai/sao10k/l3-euryale-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sao10k: L3 Euryale 70b"
  }, {
    "id": "blackboxai/sao10k/l3-lunaris-8b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sao10k: L3 Lunaris 8b"
  }, {
    "id": "blackboxai/sao10k/l3.1-euryale-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sao10k: L3.1 Euryale 70b"
  }, {
    "id": "blackboxai/sao10k/l3.3-euryale-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sao10k: L3.3 Euryale 70b"
  }, {
    "id": "blackboxai/sarvamai/sarvam-m:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sarvamai: Sarvam M"
  }, {
    "id": "blackboxai/scb10x/llama3.1-typhoon2-70b-instruct",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Scb10x: Llama3.1 Typhoon2 70b Instruct"
  }, {
    "id": "blackboxai/shisa-ai/shisa-v2-llama3.3-70b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Shisa-ai: Shisa V2 Llama3.3 70b"
  }, {
    "id": "blackboxai/sophosympatheia/midnight-rose-70b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Sophosympatheia: Midnight Rose 70b"
  }, {
    "id": "blackboxai/stability-ai/stable-diffusion",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Stability-ai: Stable Diffusion"
  }, {
    "id": "blackboxai/stability-ai/stable-diffusion-3.5-large",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Stability-ai: Stable Diffusion 3.5 Large"
  }, {
    "id": "blackboxai/stability-ai/stable-diffusion-3.5-medium",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Stability-ai: Stable Diffusion 3.5 Medium"
  }, {
    "id": "blackboxai/tencent/hunyuan-image-3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Tencent: Hunyuan Image 3"
  }, {
    "id": "blackboxai/thedrummer/anubis-70b-v1.1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thedrummer: Anubis 70b V1.1"
  }, {
    "id": "blackboxai/thedrummer/anubis-pro-105b-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thedrummer: Anubis Pro 105b V1"
  }, {
    "id": "blackboxai/thedrummer/rocinante-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thedrummer: Rocinante 12b"
  }, {
    "id": "blackboxai/thedrummer/skyfall-36b-v2",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thedrummer: Skyfall 36b V2"
  }, {
    "id": "blackboxai/thedrummer/unslopnemo-12b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thedrummer: Unslopnemo 12b"
  }, {
    "id": "blackboxai/thedrummer/valkyrie-49b-v1",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thedrummer: Valkyrie 49b V1"
  }, {
    "id": "blackboxai/thudm/glm-4-32b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thudm: Glm 4 32b"
  }, {
    "id": "blackboxai/thudm/glm-4-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thudm: Glm 4 32b"
  }, {
    "id": "blackboxai/thudm/glm-z1-32b:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thudm: Glm Z1 32b"
  }, {
    "id": "blackboxai/thudm/glm-z1-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thudm: Glm Z1 32b"
  }, {
    "id": "blackboxai/thudm/glm-z1-rumination-32b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Thudm: Glm Z1 Rumination 32b"
  }, {
    "id": "blackboxai/tngtech/deepseek-r1t-chimera:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Tngtech: Deepseek R1t Chimera"
  }, {
    "id": "blackboxai/undi95/remm-slerp-l2-13b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Undi95: Remm Slerp L2 13b"
  }, {
    "id": "blackboxai/undi95/toppy-m-7b",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Undi95: Toppy M 7b"
  }, {
    "id": "blackboxai/x-ai/grok-2-1212",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok 2 1212"
  }, {
    "id": "blackboxai/x-ai/grok-2-vision-1212",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok 2 Vision 1212"
  }, {
    "id": "blackboxai/x-ai/grok-3",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok 3"
  }, {
    "id": "blackboxai/x-ai/grok-3-beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok 3 Beta"
  }, {
    "id": "blackboxai/x-ai/grok-3-mini",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok 3 Mini"
  }, {
    "id": "blackboxai/x-ai/grok-3-mini-beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok 3 Mini Beta"
  }, {
    "id": "blackboxai/x-ai/grok-code-fast-1:free",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok Code Fast 1"
  }, {
    "id": "blackboxai/x-ai/grok-vision-beta",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "X-ai: Grok Vision Beta"
  }, {
    "id": "blackboxai/z-ai/glm-4.7",
    "object": "model",
    "created": 1677610602,
    "owned_by": "openai",
    "name": "Z-ai: Glm 4.7"
  }]);
  const [copiedId, setCopiedId] = React.useState(null);
  const filteredModels = React.useMemo(() => {
    if (!searchTerm) return models;
    const search = searchTerm.toLowerCase();
    return models.filter(model => {
      const name = (model.name || model.id || '').toLowerCase();
      const id = (model.id || '').toLowerCase();
      return name.includes(search) || id.includes(search);
    });
  }, [searchTerm, models]);
  const copyToClipboard = modelId => {
    navigator.clipboard.writeText(modelId).then(() => {
      setCopiedId(modelId);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };
  return <div>
      <div style={{
    marginBottom: '1rem',
    paddingRight: '1rem'
  }}>
        <input type="text" placeholder="Search models by name or ID..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid',
    borderRadius: '0.5rem',
    outline: 'none'
  }} className="dark:text-white" />
      </div>
      
      <div style={{
    marginBottom: '0.5rem',
    fontSize: '0.875rem'
  }}>
        Showing {filteredModels.length} of {models.length} models
      </div>

      <div style={{
    overflowX: 'auto'
  }}>
        <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '500px'
  }}>
          <thead>
            <tr style={{
    borderBottom: '2px solid'
  }} className="dark:border-gray-700">
              <th style={{
    textAlign: 'left',
    paddingLeft: '1.5rem',
    fontWeight: '600',
    width: '30%'
  }}>Model Name</th>
              <th style={{
    textAlign: 'left',
    paddingLeft: '1.5rem',
    fontWeight: '600'
  }}>Model ID</th>
              <th style={{
    textAlign: 'right',
    paddingRight: '1.5rem',
    fontWeight: '600',
    width: '60px',
    minWidth: '60px'
  }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredModels.map((model, index) => <tr key={model.id || index} style={{
    borderBottom: '1px solid'
  }} className="dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td style={{
    paddingLeft: '1.5rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1rem',
    wordWrap: 'break-word',
    verticalAlign: 'top'
  }}>
                  {model.name || model.id || 'Unknown'}
                </td>
                <td style={{
    paddingLeft: '1.5rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingRight: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    wordWrap: 'break-word',
    verticalAlign: 'top'
  }}>
                  {model.id || 'N/A'}
                </td>
                <td style={{
    paddingRight: '1.5rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    width: '60px',
    minWidth: '60px',
    textAlign: 'right',
    verticalAlign: 'top'
  }}>
                  <div style={{
    position: 'relative',
    display: 'inline-block'
  }}>
                    <button onClick={() => copyToClipboard(model.id)} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.6'} title="Copy model ID" aria-label="Copy model ID" style={{
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
    transition: 'opacity 0.2s'
  }}>
                        {copiedId === model.id ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>}
                      </button>
                    </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>

      {filteredModels.length === 0 && <div style={{
    padding: '2rem',
    textAlign: 'center',
    color: '#6b7280',
    border: '1px dashed',
    borderRadius: '0.5rem',
    marginTop: '1rem'
  }}>
          No models found matching "{searchTerm}"
        </div>}
    </div>;
};


<SearchableModels />

<Note>
  This list is automatically generated from the API. Last updated: 2026-01-28T03:45:53.392Z
</Note>
