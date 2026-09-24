---
title: "When Revocation Is Not Enough: Identity Scope and State Freshness in ERC-8004"
authors: "Kavienan Jegatheesan (Co-Author)"
venue: "18th Australasian Information Security Conference (AISC 2027)"
year: 2026
status: "submitted"
role: "Co-Author"
order: 1
---

Models an append-only RSA accumulator as a revocation registry for ERC-8004 agent identities, testing non-membership proofs across prover-supplied, cached, and current states to isolate freshness failures. Finds that a revoked agent can re-register under a fresh identity and pass verification, and that cached-state verifiers keep accepting revoked agents until refresh — then proposes a bounded-freshness policy to cap this exposure.
