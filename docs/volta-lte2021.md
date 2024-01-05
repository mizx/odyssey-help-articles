---
title: Volta System, Indicators & Inverter
subtitle: 2021 and older
tags:
  - electrical
  - volta
models:
  - 2021-beast
  - 2021-stealth
  - 2021-classic
  - 2020-mode
---

# Volta

## State of Charge (SOC) gauge colors

| Color                         | Description                 |
| ----------------------------- | --------------------------- |
| Solid green                   | Normal operating SOC (20%+) |
| Solid yellow                  | Low SOC (10-20%)            |
| Solid red                     | Low SOC (<10%)              |
| 6x red flashing               | System empty                |
| Flashing red                  | High pack temp              |
| Slow flashing blue (5 sec)    | Too cold to charge          |
| Slow flashing blue (constant) | Loading system data         |
| Slow flashing yellow (5 sec)  | Too hot to charge           |

## Important pack temperatures

| Temp (F) | Description                                |
| -------- | ------------------------------------------ |
| 134.6    | System shutdown (high temperature)         |
| 131      | High temperature warning                   |
| 125.6    | High temperature recovery \*               |
| 116.6    | Too hot to charge, pack power still usable |
| 59       | heating pads turn off (if they were on)    |
| 42.8     | Charging resumes (if system was too cold)  |
| 37.8     | System too cold to charge                  |
| -4       | System shutdown (too cold)                 |

\* If shutdown due to heat, pack will power up when below this temperature.

## Inverter Status LED

### 3600W NP Series

#### Status LED Normal States

| LED Color | LED State | Operationg Conditions  |
| --------- | --------- | ---------------------- |
| Green     | 1 blink   | Bulk Charge            |
| Green     | 2 blinks  | Accept Charge          |
| Green     | 3 blinks  | Float Charge           |
| Green     | 4 blinks  | Load Management Active |
| Amber     | 1 blink   | Inverting              |

### Status LED Fault States

| LED Color | LED State   | Operationg Conditions              |
| --------- | ----------- | ---------------------------------- |
| Any       | Off         | No power to unit or internal fault |
| Red       | Constant ON | Internal fault                     |
| Red       | 1 blink     | Inverter low battery shut down\*   |
| Red       | 2 blinks    | Inverter Overload shut down        |
| Red       | 3 blinks    | Transformer High Temp\*            |
| Red       | 4 blinks    | MOSFET High Temp\*                 |
| Red       | 5 blinks    | Battery probe open or shorted      |
| Red       | 6 blinks    | Charger high battery temp\*        |
| Amber     | 2 blinks    | Charger warm battery\*             |
| Amber     | 3 blinks    | High battery voltage\*             |
| Amber     | 4 blinks    | System overload, reset required    |

Faults marked with \* will self recover when conditions return to normal range.
