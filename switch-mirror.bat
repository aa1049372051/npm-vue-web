@echo off
set /p input=input type taobao,dev or default:
:: 定义镜像源变量
set "TAOBAO_REGISTRY=https://registry.npmmirror.com"
set "DEFAULT_REGISTRY=https://registry.npmjs.org"
set "DEV_REGISTRY=http://172.23.50.21:4873/"
echo .
echo %input%
:: 判断传入的 type 参数
if %input% == taobao (
  set "MIRROR=%TAOBAO_REGISTRY%"
  echo Switching to Taobao mirror...
) else if %input% == default (
  set "MIRROR=%DEFAULT_REGISTRY%"
  echo Switching to default registry...
) else if %input% == dev (
  set "MIRROR=%DEV_REGISTRY%"
  echo Switching to dev registry...
) else (
  echo Invalid argument. Please specify 'taobao' or 'default'.
  exit /b 1
)

:: npm 镜像源切换
where npm >nul 2>&1
if %ERRORLEVEL% equ 0 (
  npm config set registry %MIRROR%
)

:: yarn 镜像源切换
where yarn >nul 2>&1
if %ERRORLEVEL% equ 0 (
  yarn config set registry %MIRROR%
)

:: pnpm 镜像源切换
where pnpm >nul 2>&1
if %ERRORLEVEL% equ 0 (
  pnpm config set registry %MIRROR%
)

echo Mirror switch completed.