# Station CTL

## Introduction
Station ctl is a command line tool written in python to help with the configuration and management of a PHT station.
It is intended to be used by station administrators and developers to manage the station configuration and to perform
common tasks like starting, stopping or updating the station as well as managing resources such as as project data warehouses.

## Installation
The command line tool is included in the pht-station package which can be installed using pip:
```bash
pip install pht-station
```
This will automatically register the `station_ctl` command line tool and make it available in your terminal.

## Usage

To find out more about the available commands and options use the `--help` option:
```bash
station_ctl --help
```
this is also available for sub commands:
```bash
station_ctl config --help
```

### Config Validation

The `station_ctl` tool provides a command to validate the station configuration file. This command will check the configuration file for errors and missing values and provide the option to generate values that support auto generation.

```bash
station_ctl config -f /path/to/config/file
```

### Station Installation

The install command of the `station_ctl` tool will install the station based on the configuration file provided. The tool will automatically detect the file and use it for configuration and installation of the station.

```bash
station_ctl install
```