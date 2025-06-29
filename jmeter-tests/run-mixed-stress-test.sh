#!/bin/bash

echo "Starting Mixed Stress Test..."

JMETER_HOME=/opt/apache-jmeter-5.6.3
TEST_PLAN=jmeter-tests/jmx/jmeter-mixed-stress-test.jmx
RESULTS_DIR=jmeter-tests/jtl
REPORT_DIR=jmeter-tests/report/mixed-stress-test-report

mkdir -p "$RESULTS_DIR"
mkdir -p "$REPORT_DIR"

echo "Running mixed stress test..."
"$JMETER_HOME/bin/jmeter" -n -t "$TEST_PLAN" -l "$RESULTS_DIR/mixed-stress-test-results.jtl" -e -o "$REPORT_DIR"

echo "Test completed. Results saved to $RESULTS_DIR/mixed-stress-test-results.jtl"
echo "Report generated at $REPORT_DIR" 