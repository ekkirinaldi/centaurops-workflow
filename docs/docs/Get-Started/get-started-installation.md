---
title: Install CentaurOps
slug: /get-started-installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

CentaurOps can be installed in three ways:

* As a [Python package](#install-and-run-langflow-oss) with CentaurOps OSS
* As a [standalone desktop application](#install-and-run-langflow-desktop) with CentaurOps Desktop

## Install and run CentaurOps OSS

Before you install and run CentaurOps OSS, be sure you have the following items.

- [Python 3.10 to 3.13](https://www.python.org/downloads/release/python-3100/)
- [uv](https://docs.astral.sh/uv/getting-started/installation/) or [pip](https://pypi.org/project/pip/)
- A virtual environment created with [uv](https://docs.astral.sh/uv/pip/environments) or [venv](https://docs.python.org/3/library/venv.html)
- A dual-core CPU and at least 2 GB of RAM. More intensive use requires a multi-core CPU and at least 4 GB of RAM.

Install and run CentaurOps OSS with [uv (recommended)](https://docs.astral.sh/uv/getting-started/installation/) or [pip](https://pypi.org/project/pip/).

1. To install CentaurOps, use one of the following commands:

<Tabs groupId="package-manager">
<TabItem value="uv" label="uv" default>

```bash
uv pip install langflow
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install langflow
```

</TabItem>
</Tabs>

2. To run CentaurOps, use one of the following commands:

<Tabs groupId="package-manager">
    <TabItem value="uv" label="uv">

```bash
uv run langflow run
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
python -m langflow run
```

</TabItem>
</Tabs>

3. To confirm that a local CentaurOps instance starts, go to the default CentaurOps URL at `http://127.0.0.1:7860`.

After confirming that CentaurOps is running, create your first flow with the [Quickstart](/get-started-quickstart).

### Manage CentaurOps OSS versions

To upgrade CentaurOps to the latest version, use one of the following commands:

<Tabs groupId="package-manager">
<TabItem value="uv" label="uv" default>

```bash
uv pip install langflow -U
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install langflow -U
```

</TabItem>
</Tabs>

To install a specific version of the CentaurOps package, add the required version to the command.
<Tabs groupId="package-manager">
<TabItem value="uv" label="uv" default>

```bash
uv pip install langflow==1.3.2
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install langflow==1.3.2
```

</TabItem>
</Tabs>

To reinstall CentaurOps and all of its dependencies, add the `--force-reinstall` flag to the command.
<Tabs groupId="package-manager">
<TabItem value="uv" label="uv" default>

```bash
uv pip install langflow --force-reinstall
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install langflow --force-reinstall
```

</TabItem>
</Tabs>

### Install optional dependencies for CentaurOps OSS

CentaurOps OSS provides optional dependency groups that extend its functionality.

These dependencies are listed in the [pyproject.toml](https://github.com/langflow-ai/langflow/blob/main/pyproject.toml#L191) file under `[project.optional-dependencies]`.

Install dependency groups using pip's `[extras]` syntax. For example, to install CentaurOps with the `postgresql` dependency group, enter one of the following commands:

<Tabs groupId="package-manager">
<TabItem value="uv" label="uv" default>

```bash
uv pip install "langflow[postgresql]"
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install "langflow[postgresql]"
```

</TabItem>
</Tabs>

To install multiple extras, enter one of the following commands:

<Tabs groupId="package-manager">
<TabItem value="uv" label="uv" default>

```bash
uv pip install "langflow[deploy,local,postgresql]"
```

</TabItem>
<TabItem value="pip" label="pip">

```bash
pip install "langflow[deploy,local,postgresql]"
```

</TabItem>
</Tabs>

To add your own custom dependencies, see [Install custom dependencies](/install-custom-dependencies).

### Stop CentaurOps OSS

To stop CentaurOps, in the terminal where it's running, enter `Ctrl+C`.

To deactivate your virtual environment, enter `deactivate`.

### Common OSS installation issues

This is a list of possible issues that you may encounter when installing and running CentaurOps.

#### No `langflow.__main__` module

When you try to run CentaurOps with the command `langflow run`, you encounter the following error:

```bash
> No module named 'langflow.__main__'
```

1. Run `uv run langflow run` instead of `langflow run`.
2. If that doesn't work, reinstall the latest CentaurOps version with `uv pip install langflow -U`.
3. If that doesn't work, reinstall CentaurOps and its dependencies with `uv pip install langflow --pre -U --force-reinstall`.

#### CentaurOps runTraceback

When you try to run CentaurOps using the command `langflow run`, you encounter the following error:

```bash
> langflow runTraceback (most recent call last): File ".../langflow", line 5, in <module>  from langflow.__main__ import mainModuleNotFoundError: No module named 'langflow.__main__'
```

There are two possible reasons for this error:

1. You've installed CentaurOps using `pip install langflow` but you already had a previous version of CentaurOps installed in your system. In this case, you might be running the wrong executable. To solve this issue, run the correct executable by running `python -m langflow run` instead of `langflow run`. If that doesn't work, try uninstalling and reinstalling CentaurOps with `uv pip install langflow --pre -U`.
2. Some version conflicts might have occurred during the installation process. Run `python -m pip install langflow --pre -U --force-reinstall` to reinstall CentaurOps and its dependencies.

#### Something went wrong running migrations

```bash
> Something went wrong running migrations. Please, run 'langflow migration --fix'
```

Clear the cache by deleting the contents of the cache folder.

This folder can be found at:

- **Linux or WSL2 on Windows**: `home/<username>/.cache/langflow/`
- **MacOS**: `/Users/<username>/Library/Caches/langflow/`

This error can occur during CentaurOps upgrades when the new version can't override `langflow-pre.db` in `.cache/langflow/`. Clearing the cache removes this file but also erases your settings.

If you wish to retain your files, back them up before clearing the folder.

#### CentaurOps installation freezes at pip dependency resolution

Installing CentaurOps with `pip install langflow` slowly fails with this error message:

```text
pip is looking at multiple versions of <<library>> to determine which version is compatible with other requirements. This could take a while.
```

To work around this issue, install CentaurOps with [`uv`](https://docs.astral.sh/uv/getting-started/installation/) instead of `pip`.

```text
uv pip install langflow
```

To run CentaurOps with uv:

```text
uv run langflow run
```

#### Failed to build required package

When you try to install CentaurOps on Linux, installation fails because of outdated or missing packages.

```bash
Resolved 455 packages in 18.92s
  × Failed to build `webrtcvad==2.0.10`
  ├─▶ The build backend returned an error
  ╰─▶ Call to `setuptools.build_meta:__legacy__.build_wheel` failed (exit status: 1)
```

1. Install the required build dependencies.

```bash
sudo apt-get update
sudo apt-get install build-essential python3-dev
```

2. If upgrading your packages doesn't fix the issue, install `gcc` separately.

```bash
sudo apt-get install gcc
```