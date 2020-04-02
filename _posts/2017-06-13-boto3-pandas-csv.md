---
layout: post
title:  "【メモ】boto3でs3のcsvをpandasに読み込む"
description: "【メモ】boto3でs3のcsvをpandasに読み込む"
date: 2017-06-13
categories: development
lang: ja_JP
tags:
- boto3
- pandas
- python
---
{% highlight python %}
import pandas as pd
from io import StringIO
import boto3
ACCESS_KEY = 'your access key'
SECRET_KEY = 'your secret key'
client = boto3.client('s3', aws_access_key_id=ACCESS_KEY, aws_secret_access_key=SECRET_KEY)
paginator = client.get_paginator('list_objects')
pageresponse = paginator.paginate(Bucket="your bucket")
for pageobject in pageresponse:
    for file in pageobject["Contents"]:
        obj = client.get_object(Bucket="your bucket", Key=file["Key"])
        content = obj['Body'].read().decode('utf-8')
        reader = pd.read_csv(StringIO(content))
        print(reader)
{% endhighlight %}
