@echo off
REM Create required directories if they do not exist
if not exist jtl mkdir jtl
if not exist report mkdir report

REM Delete old report directory if exists
if exist report\jmeter-put-transaction-report rmdir /s /q report\jmeter-put-transaction-report

REM Delete old result file if exists
if exist jtl\jmeter-put-transaction-results.jtl del jtl\jmeter-put-transaction-results.jtl

REM Run PUT /transactions/{id} test and generate HTML report
jmeter -n -t jmx/jmeter-put-transaction.jmx -l jtl/jmeter-put-transaction-results.jtl -e -o report/jmeter-put-transaction-report

echo.
echo Test finished. HTML report is in report\jmeter-put-transaction-report\index.html
echo. 