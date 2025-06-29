@echo off
echo Starting Mixed Stress Test...

set JMETER_HOME=C:\program files\apache-jmeter-5.6.3
set TEST_PLAN=jmx\jmeter-mixed-stress-test.jmx
set RESULTS_DIR=jtl
set REPORT_DIR=report\mixed-stress-test-report

if not exist "%RESULTS_DIR%" mkdir "%RESULTS_DIR%"
if not exist "%REPORT_DIR%" mkdir "%REPORT_DIR%"

echo Running mixed stress test...
"%JMETER_HOME%\bin\jmeter.bat" -n -t "%TEST_PLAN%" -l "%RESULTS_DIR%\mixed-stress-test-results.jtl" -e -o "%REPORT_DIR%"

echo Test completed. Results saved to %RESULTS_DIR%\mixed-stress-test-results.jtl
echo Report generated at %REPORT_DIR%
pause 