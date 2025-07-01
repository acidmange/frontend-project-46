### Hexlet tests and linter status:
[![Actions Status](https://github.com/acidmange/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/acidmange/frontend-project-46/actions)
[![lint and tests](https://github.com/acidmange/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/acidmange/frontend-project-46/actions/workflows/main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/39c45a849d92499eb044/maintainability)](https://codeclimate.com/github/acidmange/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/39c45a849d92499eb044/test_coverage)](https://codeclimate.com/github/acidmange/frontend-project-46/test_coverage)

# Gendiff Utility - File Comparison Tool


# Gendiff - File Comparison Utility

Gendiff is a command-line utility that compares two configuration files and displays the differences in a human-readable format. It supports JSON and YAML formats and provides multiple output formatting options.

## Key Features

- **Multi-format support**: Works with JSON and YAML files
- **Flexible output**: Choose from three distinct output formats
- **Cross-platform**: Works on Windows, macOS, and Linux systems
- **User-friendly**: Simple CLI interface with helpful documentation

## System Requirements

- **Node.js** version 14.0 or higher
- **npm** (bundled with Node.js installation)

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:acidmange/frontend-project-46.git
   ```

2. Navigate to project directory:
   ```
   cd frontend-project-46
   ```

3. Install dependencies:
   ```
   make install
   ```

## Usage Guide

### Basic Syntax
```
gendiff [options] <file1> <file2>
```

### Command Options
| Option          | Description                              |
|-----------------|------------------------------------------|
| `-h`, `--help`  | Display help information                 |
| `-f`, `--format`| Specify output format (default: stylish) |
|                 | Available formats: stylish, plain, json  |

### Examples
1. **Default comparison** (stylish format):
   ```
   gendiff file1.json file2.json
   ```

2. **Plain text output**:
   ```
   gendiff -f plain file1.yaml file2.yaml
   ```

3. **JSON format output**:
   ```
   gendiff --format json file1.yml file2.yml
   ```

### Development Commands
| Command       | Description                     |
|---------------|---------------------------------|
| `make test`   | Run test suite                  |
| `make lint`   | Perform code style checking     |

## Output Formats

### 1. Stylish Format (Default)
Displays differences in a nested, visually structured format:
```
{
  common: {
    setting1: Value 1
  - setting2: 200
  + setting2: 300
  - setting3: true
  + setting3: null
  }
}
```

### 2. Plain Format
Provides a flat, textual description of changes:
```
Property 'common.setting2' was updated. From 200 to 300
Property 'common.setting3' was updated. From true to null
```

### 3. JSON Format
Outputs differences as a machine-readable JSON structure:
```
{
  "changes": [
    {
      "key": "common.setting2",
      "oldValue": 200,
      "newValue": 300,
      "type": "updated"
    }
  ]
}
```

## Supported File Types

| Format | Extensions       |
|--------|------------------|
| JSON   | .json            |
| YAML   | .yaml, .yml      |

