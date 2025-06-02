import warnings

# Suppress litellm deprecation warning
warnings.filterwarnings(
    "ignore",
    message="open_text is deprecated. Use files() instead.",
    category=DeprecationWarning,
    module="litellm.utils"
)

# Suppress Pydantic deprecation warning
warnings.filterwarnings(
    "ignore",
    message="Support for class-based `config` is deprecated",
    category=DeprecationWarning,
    module="pydantic"
) 