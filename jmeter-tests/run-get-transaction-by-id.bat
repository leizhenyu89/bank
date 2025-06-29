@echo off
REM Create required directories if they do not exist
if not exist jtl mkdir jtl
if not exist report mkdir report

REM Delete old report directory if exists
if exist report\jmeter-get-transaction-by-id-report rmdir /s /q report\jmeter-get-transaction-by-id-report

REM Delete old result file if exists
if exist jtl\jmeter-get-transaction-by-id-results.jtl del jtl\jmeter-get-transaction-by-id-results.jtl

REM Run GET /transactions/{id} test and generate HTML report
jmeter -n -t jmx/jmeter-get-transaction-by-id.jmx -l jtl/jmeter-get-transaction-by-id-results.jtl -e -o report/jmeter-get-transaction-by-id-report

echo.
echo Test finished. HTML report is in report\jmeter-get-transaction-by-id-report\index.html
echo. 