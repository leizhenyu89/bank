@echo off
REM Create required directories if they do not exist
if not exist jtl mkdir jtl
if not exist report mkdir report

REM Delete old report directory if exists
if exist report\jmeter-get-transactions-list-report rmdir /s /q report\jmeter-get-transactions-list-report

REM Delete old result file if exists
if exist jtl\jmeter-get-transactions-list-results.jtl del jtl\jmeter-get-transactions-list-results.jtl

REM Run GET /transactions/list test and generate HTML report
jmeter -n -t jmx/jmeter-get-transactions-list.jmx -l jtl/jmeter-get-transactions-list-results.jtl -e -o report/jmeter-get-transactions-list-report

echo.
echo Test finished. HTML report is in report\jmeter-get-transactions-list-report\index.html
echo. 