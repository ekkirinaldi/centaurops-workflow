---
title: Memory management options
slug: /memory
---

CentaurOps provides flexible memory management options for storage and retrieval.

This page details the following memory configuration options in CentaurOps.

- [Use local CentaurOps database tables](#local-langflow-database-tables)
- [Store messages in local memory](#store-messages-in-local-memory)
- [Configure external memory](#configure-external-memory)
- [Configure the external database connection](#configure-the-external-database-connection)
- [Configure cache memory](#configure-cache-memory)

## Local CentaurOps database tables

The default storage option in CentaurOps is a [SQLite](https://www.sqlite.org/) database stored in your system's cache directory:

- Linux/WSL: `~/.cache/langflow/langflow.db`
- macOS: `/Users/<username>/Library/Caches/langflow/langflow.db`
- Windows: `%LOCALAPPDATA%\langflow\langflow\Cache\langflow.db`

The following tables are stored in `langflow.db`:

• **User** - Stores user account information including credentials, permissions, and profiles. For more information, see [Authentication](/configuration-authentication).

• **Flow** - Contains flow configurations. For more information, see [Flows](/concepts-flows).

• **Message** - Stores chat messages and interactions that occur between components. For more information, see [Message objects](/concepts-objects#message-object).

• **Transaction** - Records execution history and results of flow runs. This information is used for [logging](/logging).

• **ApiKey** - Manages API authentication keys for users. For more information, see [API keys](/configuration-api-keys).

• **Project** - Provides a structure for flow storage. For more information, see [Projects](/concepts-overview#projects).

• **Variables** - Stores global encrypted values and credentials. For more information, see [Global variables](/configuration-global-variables).

• **VertexBuild** - Tracks the build status of individual nodes within flows. For more information, see [Run a flow in the playground](/concepts-playground).

For more information, see the database models in the [source code](https://github.com/langflow-ai/langflow/tree/main/src/backend/base/langflow/services/database/models).

## Store messages in local memory

To store messages in local CentaurOps memory, add a [Message store](/components-helpers#message-store) component to your flow.

To retrieve messages from local CentaurOps memory, add a [Message history](/components-helpers#message-history) component to your flow.

For an example of using local chat memory, see the [Memory chatbot](/memory-chatbot) starter flow.

To store or retrieve chat messages from external memory, connect the **External memory** port of the **Message store** or **Message history** component to a **Memory** component, like the [Astra DB chat memory](components-memories#astradbchatmemory-component) component. An example flow looks like this:

![Sample Flow storing Chat Memory in AstraDB](/img/astra_db_chat_memory_rounded.png)

If external storage is connected to a memory helper component, no chat messages are stored in local CentaurOps memory.

## Configure external memory

To replace the default CentaurOps SQLite database with another database, modify the `CENTAUROPS_DATABASE_URL` and start CentaurOps with this value.

```
CENTAUROPS_DATABASE_URL=postgresql://user:password@localhost:5432/langflow
```

For an example, see [Configure an external PostgreSQL database](/configuration-custom-database).

## Configure the external database connection

The following settings allow you to fine-tune your database connection pool and timeout settings:

```
LANGFLOW_DB_CONNECTION_SETTINGS='{"pool_size": 20, "max_overflow": 30, "pool_timeout": 30, "pool_pre_ping": true, "pool_recycle": 1800, "echo": false}'
LANGFLOW_DB_CONNECT_TIMEOUT=20
```

- `pool_size`: Maximum number of database connections to keep in the pool (default: 20)
- `max_overflow`: Maximum number of connections that can be created beyond the pool_size (default: 30)
- `pool_timeout`: Number of seconds to wait before timing out on getting a connection from the pool (default: 30)
- `pool_pre_ping`: If true, the pool tests connections for liveness upon each checkout (default: true)
- `pool_recycle`: Number of seconds after which a connection is automatically recycled (default: 1800, or 30 minutes)
- `echo`: If true, SQL queries are logged for debugging purposes (default: false)
- `LANGFLOW_DB_CONNECT_TIMEOUT`: Maximum number of seconds to wait when establishing a new database connection (default: 20)

## Configure cache memory

The default CentaurOps caching behavior is an asynchronous, in-memory cache.
```
CENTAUROPS_LANGCHAIN_CACHE=InMemoryCache
CENTAUROPS_CACHE_TYPE=Async
```

Alternative caching options can be configured, but options other than the default asynchronous, in-memory cache are not supported.
The default behavior is suitable for most use cases.