---
title: Logging options in CentaurOps
slug: /logging
---

CentaurOps uses the `loguru` library for logging.

The default `log_level` is `ERROR`. Other options are `DEBUG`, `INFO`, `WARNING`, and `CRITICAL`.

The default logfile is called `langflow.log`, and its location depends on your operating system.

* Linux/WSL: `\~/.cache/langflow/`
* macOS: `/Users/\<username\>/Library/Caches/langflow/`
* Windows: `%LOCALAPPDATA%\langflow\langflow\Cache`

The `LANGFLOW_LOG_ENV` controls log output and formatting. The `container` option outputs serialized JSON to stdout. The `container_csv` option outputs CSV-formatted plain text to stdout. The `default` (or not set) logging option outputs prettified output with [RichHandler](https://rich.readthedocs.io/en/stable/reference/logging.html).

To modify CentaurOps's logging configuration, add them to your `.env` file and start CentaurOps.

```text
CENTAUROPS_LOG_LEVEL=ERROR
LANGFLOW_LOG_FILE=path/to/logfile.log
LANGFLOW_LOG_ENV=container
```

To start CentaurOps with the values from your .env file, start CentaurOps with `uv run langflow run --env-file .env`