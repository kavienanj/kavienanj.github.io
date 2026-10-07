---
title: "When Tools Lie: Reliability of Mathematical Agents Under Corrupted Tool Feedback"
authors: "Kavienan Jegatheesan (First Author)"
venue: "6th Workshop on Mathematical Reasoning and AI, NeurIPS 2026"
year: 2026
status: "published"
role: "First Author"
order: 2
links:
  arxiv: "https://arxiv.org/abs/2610.08097"
---

Mathematical problem solving often requires deterministic computational steps that agents delegate to tools and implicitly trust. Yet tools can fail silently, returning plausible but incorrect results. How well can agents detect and correct corrupted tool call outputs? We study this through a controlled corruption framework where a hidden interceptor replaces tool call results with plausible incorrect information on targeted problems. We evaluate agents across 31 problems under four verification designs including no verification (baseline), mandatory same-context reflection, optional fresh-context verification, and optional structural verification. Without verification, corruption causes dramatic accuracy loss, from 100% down to 72.4%. Mandatory reflection fully recovers this performance to 100%. Optional verification improves accuracy only when models actively invoke it. Our results show that checking frequency is strongly associated with robustness differences, while unequal invocation prevents a controlled comparison of verifier quality. A supporting recovery experiment shows that full problem restart succeeds in 100% of cases after explicit detection. These findings demonstrate that verifier availability and verification policy are separate components of mathematical-agent reliability. Mandatory policies enforce verification while optional policies depend on the model's own choice to invoke it.
