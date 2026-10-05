---
title: "Random Sampling for Linear Learned Index Fitting"
authors: "Kavienan Jegatheesan (Co-Author)"
venue: "ERU Research Symposium 2026, University of Moratuwa"
year: 2026
status: "submitted"
role: "Co-Author"
order: 5
---

Fitting a learned index's model over an entire dataset costs time proportional to dataset size and makes the fit predictable, letting an adversary who knows the fitting rule corrupt it with certainty by placing a few extreme outlier keys. This work tests whether fitting the model on a small, randomly drawn subset of the keys preserves prediction accuracy and query speed while making the fitting cost independent of dataset size, and whether choosing that subset randomly, rather than by a fixed rule, provides measurable robustness against such adversarial data. Benchmarks across six key distributions and three dataset sizes show that a random-sample fit matches the accuracy and speed of an exact fit on non-adversarial data, and yields up to 319 times lower error and up to 2.7 times faster queries than the exact fit under adversarial poisoning, while a fixed, deterministic sample offers no such protection. The safe sample size is governed only by the poisoned fraction, not by dataset size, so it does not need to be re-derived as the dataset grows.
