#! /bin/bash

curl -s localhost:3005/api/checkouts/12314 | jq .
echo "------------------------------"
curl -s localhost:3005/api/checkouts/12314?couponId=3 | jq .
echo "------------------------------"
curl -s -XPOST localhost:3005/api/checkouts/12314 | jq .
