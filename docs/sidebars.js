module.exports = {
  docs: [
    "Get-Started/welcome-to-langflow",
    {
      type: "category",
      label: "Get started",
      items: [
        "Get-Started/get-started-installation",
        "Get-Started/get-started-quickstart",
      ],
    },
    {
      type: "category",
      label: "Starter projects",
      items: [
        'Starter-Projects/starter-projects-basic-prompting',
        'Starter-Projects/starter-projects-vector-store-rag',
        'Starter-Projects/starter-projects-simple-agent',
      ],
    },
    {
      type: "category",
      label: "Sample flows",
      items: [
        'Sample-Flows/blog-writer',
        'Sample-Flows/document-qa',
        'Sample-Flows/memory-chatbot',
        'Sample-Flows/financial-report-parser',
        'Sample-Flows/sequential-agent',
        'Sample-Flows/travel-planning-agent',
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        "Concepts/concepts-overview",
        "Concepts/concepts-playground",
        "Concepts/concepts-components",
        "Concepts/concepts-flows",
        "Concepts/concepts-objects",
        "Concepts/concepts-publish",
        "Concepts/embedded-chat-widget",
        "Concepts/mcp-server",
        "Concepts/concepts-file-management",
        "Concepts/concepts-voice-mode",
      ],
    },
    {
      type: "category",
      label: "Components",
      items: [
        "Components/components-agents",
        "Components/components-bundles",
        "Components/components-custom-components",
        "Components/components-data",
        "Components/components-embedding-models",
        "Components/components-helpers",
        "Components/components-io",
        "Components/components-logic",
        "Components/components-memories",
        "Components/components-models",
        "Components/components-processing",
        "Components/components-prompts",
        "Components/components-tools",
        "Components/components-vector-stores",
      ],
    },
    {
      type: "category",
      label: "Agents",
      items: [
        "Agents/agents-overview",
        "Agents/agent-tool-calling-agent-component",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      items: [
        "Configuration/configuration-api-keys",
        "Configuration/configuration-authentication",
        "Configuration/configuration-cli",
        "Configuration/configuration-custom-database",
        "Configuration/configuration-global-variables",
        "Configuration/environment-variables",
      ],
    },
    {
      type: "category",
      label: "Develop",
      items: [
        {
          type: "doc",
          id: "Develop/develop-overview",
          label: "Overview"
        },
        {
          type: "doc",
          id: "Develop/develop-application",
          label: "Develop an application in CentaurOps"
        },
        {
          type: "doc",
          id: "Develop/install-custom-dependencies",
          label: "Install custom dependencies"
        },
        {
          type: "doc",
          id: "Develop/memory",
          label: "Memory management"
        },
        {
          type: "doc",
          id: "Develop/session-id",
          label: "Session ID"
        },
        {
          type: "doc",
          id: "Develop/logging",
          label: "Logging"
        },
        {
          type: "doc",
          id: "Develop/webhook",
          label: "Webhook"
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      items: [
        {
          type:"doc",
          id: "Deployment/deployment-overview",
          label: "Deployment overview"
        },
        {
          type: "doc",
          id: "Deployment/deployment-docker",
          label: "Docker"
        },
        {
          type: "doc",
          id: "Deployment/deployment-caddyfile",
          label: "Deploy CentaurOps on a remote server"
        },
        {
          type: "category",
          label: "Kubernetes",
          items: [
            {
              type: "doc",
              id: "Deployment/deployment-prod-best-practices",
              label: "CentaurOps architecture and best practices"
            },
            {
              type: "doc",
              id: "Deployment/deployment-kubernetes-dev",
              label: "Deploy in development"
            },
            {
              type: "doc",
              id: "Deployment/deployment-kubernetes-prod",
              label: "Deploy in production"
            }
          ]
        },
        {
          type: "doc",
          id: "Deployment/deployment-gcp",
          label: "Google Cloud Platform"
        },
        {
          type: "doc",
          id: "Deployment/deployment-hugging-face-spaces",
          label: "Hugging Face Spaces"
        },
        {
          type: "doc",
          id: "Deployment/deployment-railway",
          label: "Railway"
        },
        {
          type: "doc",
          id: "Deployment/deployment-render",
          label: "Render"
        },
      ],
    },
    {
      type: "category",
      label: "API reference",
      items: [
        {
          type: "link",
          label: "API documentation",
          href: "/api",
        },
        {
          type: "doc",
          id: "API-Reference/api-reference-api-examples",
          label: "API examples",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "Integrations/Apify/integrations-apify",
        {
          type: "doc",
          id: "Integrations/Arize/integrations-arize",
          label: "Arize",
        },
        {
          type: "doc",
          id: "Integrations/mcp-component-astra",
          label: "Astra DB MCP server",
        },
        "Integrations/integrations-assemblyai",
        {
          type: "doc",
          id: "Integrations/Composio/integrations-composio",
          label: "Composio",
        },
        {
          type: 'category',
          label: 'Google',
          items: [
            'Integrations/Google/integrations-setup-google-oauth-langflow',
            'Integrations/Google/integrations-setup-google-cloud-vertex-ai-langflow',
            'Integrations/Google/integrations-google-big-query',
          ],
        },
        "Integrations/integrations-langfuse",
        "Integrations/integrations-langsmith",
        "Integrations/integrations-langwatch",
        "Integrations/integrations-opik",
        {
          type: "category",
          label: "Notion",
          items: [
            "Integrations/Notion/integrations-notion",
            "Integrations/Notion/notion-agent-conversational",
            "Integrations/Notion/notion-agent-meeting-notes",
          ],
        },
        {
          type: "category",
          label: "NVIDIA",
          items: [
            "Integrations/Nvidia/integrations-nvidia-ingest",
            "Integrations/Nvidia/integrations-nvidia-nim-wsl2",
            "Integrations/Nvidia/integrations-nvidia-system-assist",
          ],
        },
      ],
    },
  ],
};