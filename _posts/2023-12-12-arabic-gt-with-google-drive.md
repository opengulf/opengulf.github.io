---
title: "Building Handwritten Ground Truth for HTR with the Google Vision API in Google Drive"
excerpt_separator: "<!--more-->"
categories:
  - HTR
tags:
  - ground truth
  - Arabic
---


## Building Handwritten Ground Truth for HTR with the Google Vision API in Google Drive 

### Fady John


In today's digital era, leveraging advanced technologies to streamline and enhance a scholarly workflow is important. One such technology that has been making waves is the Vision API, a powerful tool provided by Google Cloud. 

Christopher Rose explained in a post how [we can use Google Docs to OCR Arabic text](https://christophersrose.com/2020/05/05/how-to-use-google-docs-to-ocr-arabic-text/). Similar to Rose, in this post I will provide a tutorial on how we can harness the capabilities of the Vision API along with Google docs to transcribe digitized handwritten samples of Arabic (or any other language for that matter) using Google Docs. These transcriptions, although imperfect, create a baseline text which can then be human corrected and reused as ground truth (GT) for handwritten text recognition (HTR) systems such as Transkribus. 

In the Fall 2023 semester working with the HTR working group for regional languages at NYU Abu Dhabi, I used this method to create GT for an Arabic HTR model in Transkribus. 

The following steps show how you can you can do this:

- Start by scanning or taking high-quality images of your handwritten documents. Upload these images to Google Drive. Organize them into a dedicated folder for better management.

<img src="/assets/images/fadyblogstep1.png" style="width:820px;height:200px;">

- Simply right-click (control-click) on the image and choose "Open with Google Docs." This straightforward action opens the selected image directly in the Google Docs application.

<img src="/assets/images/fadyblogstep2.png" style="width:750px;height:250px;"><br>

The generated document displays both the image and its transcribed text, as shown in the image below.

<img src="/assets/images/fadyblogstep3.png" style="width:600px;height:250px;">


The result of that method is actually impressive, as it has the ability to transcribe even complex Arabic historical handwriting that many people cannot read. Of course, there are some spelling issues which need to be corrected in the text, but the process of correction is much faster than transcribing from scratch. 

We used the abovementioned method to double the size of the Arabic transcription model's ground truth, soaring from 60 to approximately 120 pages in just a few days work. This substantial expansion played a pivotal role in enhancing the model's transcription accuracy. The positive impact on accuracy underscores the effectiveness of leveraging the Vision API and Google Docs integration for extending ground truth datasets.

Yet, the versatility of this method extends beyond its role in crafting training page sets. Beyond its utility for training purposes, this technique opens doors to a spectrum of applications. It can be harnessed for diverse projects, ranging from data enrichment and analysis to creating comprehensive datasets for machine learning models in various domains. The seamless synergy between the Vision API and Google Docs presents a valuable tool that transcends its initial application, offering a flexible solution for data-related tasks across different fields.</p>


Suggestion citation: 

