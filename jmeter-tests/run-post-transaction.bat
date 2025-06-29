@echo off
REM Create required directories if they do not exist
if not exist jtl mkdir jtl
if not exist report mkdir report

REM Delete old report directory if exists
if exist report\jmeter-post-transaction-report rmdir /s /q report\jmeter-post-transaction-report

REM Delete old result file if exists
if exist jtl\jmeter-post-transaction-results.jtl del jtl\jmeter-post-transaction-results.jtl

REM Run POST /transactions test and generate HTML report
jmeter -n -t jmx/jmeter-post-transaction.jmx -l jtl/jmeter-post-transaction-results.jtl -e -o report/jmeter-post-transaction-report

echo.
echo Test finished. HTML report is in report\jmeter-post-transaction-report\index.html
echo. 