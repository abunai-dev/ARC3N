<p align="center"> 
    <h3 align="center"><img alt="ABUNAI" src="abunai-art-240.png"><br>
    ARC³N</h3>
</p>
<p>&nbsp;</p>

## ARC³N: Research Archive for Software-Architectural Uncertainty

[![xDECAF analysis framework](https://img.shields.io/badge/xDECAF%20analysis%20framework-v4.0.0-orange?style=flat-square&logo=eclipse&logoColor=white)](https://dataflowanalysis.org)
[![Dissertation](https://img.shields.io/badge/Dissertation-Available-green?style=flat-square&logo=GitBook&logoColor=white)](https://doi.org/10.5445/IR/1000178700)
[![Overview Slides](https://img.shields.io/badge/Overview%20Slides-Available-green?style=flat-square&logo=Slides&logoColor=white)](https://sebastianhahner.de/talks/2024/DoctoralDefenseSebastianHahner_2024_ArchitectureBasedAndUncertaintyAwareConfidentialityAnalysis.pdf)

ARC³N is part of the ABUNAI approach to uncertainty-aware confidentiality analysis.
This repository provides tool support for the first two steps of the procedure shown below: The identification and classification of uncertainty sources.
For further information, please see the [dissertation](https://doi.org/10.5445/IR/1000178700) *Chapter 4.1* on the procedure and *Chapter 5* on the identification and classification of
uncertainty Regarding confidentiality.
<p>&nbsp;</p>

![Procedure](arc3n-light.png#gh-light-mode-only)
![Procedure](arc3n-dark.png#gh-dark-mode-only)

## Overview

ARC³N enables a comprehensive overview of known uncertainties that can impact confidentiality.
Additionally, software architects can collaborate on the knowledge through GitHub issues, which can be accessed from within the tool.

To access the tool use the following link:
https://arc3n.abunai.dev/

## Installing and Running Locally

1) Dowload and install [Node.js](https://nodejs.org/en/download)
2) Navigate to the `ARC3N` folder in your console
3) Run `npm install` in your console
4) Run `npm run fetch-uncertainties` in your console
5) Run `npm run dev` in your console
6) Open the tooling at http://localhost:5173/
