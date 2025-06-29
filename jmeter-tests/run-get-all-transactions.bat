@echo off
REM Create required directories if they do not exist
if not exist jtl mkdir jtl
if not exist report mkdir report

REM Delete old report directory if exists
if exist report\jmeter-get-all-transactions-report rmdir /s /q report\jmeter-get-all-transactions-report

REM Delete old result file if exists
if exist jtl\jmeter-get-all-transactions-results.jtl del jtl\jmeter-get-all-transactions-results.jtl

REM Run GET /transactions test and generate HTML report
jmeter -n -t jmx/jmeter-get-all-transactions.jmx -l jtl/jmeter-get-all-transactions-results.jtl -e -o report/jmeter-get-all-transactions-report

echo.
echo Test finished. HTML report is in report\jmeter-get-all-transactions-report\index.html
echo. 