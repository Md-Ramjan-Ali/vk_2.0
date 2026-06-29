var stepsData = {
  // =========================================================================
  // SECTION 1: Phase A-E (Concept & Design Phases)
  // =========================================================================
  "A": {
    "stepName": "Concept Definition",
    "objective": "Define core concepts, feasibility, and project requirements.",
    "description": "Phase A involves defining the project concept. This includes identifying core project needs, performing feasibility analysis, and establishing preliminary operational requirements.",
    "additionalInfo": "Key deliverables: Concept of Operations (ConOps) and initial capability definitions.",
    "badge": "SCHRITT Phase A",
    "duration": "1 Month",
    "contactPerson": "Mission Architect",
    "documents": [
      "Concept of Operations (ConOps)",
      "Initial Operational Requirements",
      "System Feasibility Assessment"
    ]
  },
  "B": {
    "stepName": "Preliminary Design",
    "objective": "Formulate preliminary design specifications and system architecture.",
    "description": "Phase B focuses on translating requirements into a preliminary system design. Major subsystems are identified, interfaces are defined, and risk reduction plans are drafted.",
    "additionalInfo": "Key deliverables: Preliminary Design Review (PDR) report and initial safety analysis.",
    "badge": "SCHRITT Phase B",
    "duration": "2 Months",
    "contactPerson": "Systems Engineer",
    "documents": [
      "Preliminary Design Review (PDR) Report",
      "System Architecture Blueprint",
      "Initial Safety Case Analysis"
    ]
  },
  "C": {
    "stepName": "Final Design and Fabrication",
    "objective": "Finalize design documents and begin hardware/software fabrication.",
    "description": "Phase C is the detailed design and fabrication phase. Detailed engineering designs are completed, and manufacturing/coding of subsystems begins.",
    "additionalInfo": "Key deliverables: Critical Design Review (CDR) approval, subsystem verification plans.",
    "badge": "SCHRITT Phase C",
    "duration": "3 Months",
    "contactPerson": "Fabrication Supervisor",
    "documents": [
      "Critical Design Review (CDR) Approval",
      "Detailed Engineering Drawings",
      "Subsystem Verification Plans"
    ]
  },
  "D": {
    "stepName": "System Assembly and Integration",
    "objective": "Integrate subsystems and perform system-level testing.",
    "description": "Phase D focuses on assembling and integrating subsystems into a complete operational system. Environmental testing, calibration, and operational readiness verification are completed here.",
    "additionalInfo": "Key deliverables: System Integration Review (SIR) and operational readiness report.",
    "badge": "SCHRITT Phase D",
    "duration": "2 Months",
    "contactPerson": "Integration Specialist",
    "documents": [
      "System Integration Review (SIR) Report",
      "Environmental Test Logs",
      "Operational Readiness Checklist"
    ]
  },
  "E": {
    "stepName": "Operations and Sustainment",
    "objective": "Deploy the system and manage ongoing operations.",
    "description": "Phase E represents the active operational lifespan of the system. Activities include data collection, routine maintenance, system updates, and user support.",
    "additionalInfo": "Key deliverables: Operational logs, maintenance reports, and user feedback documentation.",
    "badge": "SCHRITT Phase E",
    "duration": "Ongoing",
    "contactPerson": "Operations Lead",
    "documents": [
      "Active Flight Logbook",
      "System Maintenance Schedule",
      "Decommissioning Plan Drafting"
    ]
  },

  // =========================================================================
  // SECTION 2: Technology Evaluation (TE) Levels
  // =========================================================================
  "TE": {
    "stepName": "Technology Evaluation (TE)",
    "objective": "Align all Technology Evaluation activities.",
    "description": "The overarching Technology Evaluation framework spans levels 1 through 4 to ensure technology maturity, requirements verification, and system architecture feasibility.",
    "additionalInfo": "Oversees sub-steps TE 1 to TE 4.",
    "badge": "SCHRITT TE",
    "duration": "Ongoing",
    "contactPerson": "R&D Lead Scientist",
    "documents": [
      "Technology Maturity Assessment Plan",
      "TE Framework Overview"
    ]
  },
  "TE1": {
    "stepName": "Technology Evaluation Level 1",
    "objective": "Conduct initial technology assessment and validation.",
    "description": "This phase focuses on the first stage of technology evaluation. Key parameters are defined, and basic feasibility of target technology integration is verified against requirements.",
    "additionalInfo": "Reviews are conducted to align on baseline technical specifications.",
    "badge": "SCHRITT TE 01",
    "duration": "2 Weeks",
    "contactPerson": "R&D Lead Scientist",
    "documents": [
      "Initial Tech Assessment Guidelines",
      "Feasibility Verification Model"
    ]
  },
  "TE2": {
    "stepName": "Technology Evaluation Level 2",
    "objective": "Perform detailed simulation and component-level testing.",
    "description": "Detailed modeling, simulation, and laboratory-scale testing are carried out to validate performance metrics and identify any technical bottlenecks.",
    "additionalInfo": "Risk assessment registers are updated based on test outcomes.",
    "badge": "SCHRITT TE 02",
    "duration": "1 Month",
    "contactPerson": "R&D Lead Scientist",
    "documents": [
      "Detailed Simulation Results",
      "Component-Level Test Report",
      "Performance Benchmarks"
    ]
  },
  "TE3": {
    "stepName": "Technology Evaluation Level 3",
    "objective": "Prototype development and environmental verification.",
    "description": "Early-stage prototype development and testing in a simulated operational environment to verify functionality under stress conditions.",
    "additionalInfo": "Requires cross-functional review before moving to system integration.",
    "badge": "SCHRITT TE 03",
    "duration": "1.5 Months",
    "contactPerson": "R&D Lead Scientist",
    "documents": [
      "Prototype Test Specifications",
      "Environmental Chamber Results",
      "Structural Integrity Logs"
    ]
  },
  "TE4": {
    "stepName": "Technology Evaluation Level 4",
    "objective": "System integration and final validation.",
    "description": "Final validation of integrated technology subsystems. This stage prepares the system for full-scale manufacturing readiness assessment.",
    "additionalInfo": "Final sign-off is required from lead systems engineer.",
    "badge": "SCHRITT TE 04",
    "duration": "2 Months",
    "contactPerson": "R&D Lead Scientist",
    "documents": [
      "Full System Integration Report",
      "Technology Readiness Verification",
      "Safety Case Sign-off"
    ]
  },

  // =========================================================================
  // SECTION 3: Process Engineering (PE) Levels
  // =========================================================================
  "PE": {
    "stepName": "Process Engineering (PE)",
    "objective": "Establish baseline process engineering and manufacturing plans.",
    "description": "Process Engineering spans across the entire workflow to develop manufacturing procedures, ensure tooling alignment, and set production requirements.",
    "additionalInfo": "Coordinates with all milestone gates and phase transitions.",
    "badge": "SCHRITT PE",
    "duration": "Ongoing",
    "contactPerson": "Process Engineer",
    "documents": [
      "Overarching Manufacturing Procedures",
      "PE Tooling Layouts"
    ]
  },
  "PE1": {
    "stepName": "Basic Process Engineering Guidelines Established",
    "objective": "Define the baseline scope, guidelines, and engineering schemas for the processes.",
    "description": "Establish primary process inputs, identify technical interfaces, and outline standard manufacturing flow configurations at a conceptual level.",
    "additionalInfo": "Focus is on high-level process flow definition and identifying engineering constraint areas.",
    "badge": "SCHRITT PE 01",
    "duration": "~1 Month",
    "contactPerson": "Process Engineer",
    "documents": [
      "Process Engineering Guidelines",
      "Standard Flow Configuration Schema"
    ]
  },
  "PE2": {
    "stepName": "Process Design & Concept Formulation",
    "objective": "Develop draft process definitions, workflow layout diagrams, and mapping schemas.",
    "description": "Formulate detailed manufacturing steps, identify processing equipment requirements, and complete initial process capability studies.",
    "additionalInfo": "Initial selection of standard operating technologies and interface controls.",
    "badge": "SCHRITT PE 02",
    "duration": "~2 Months",
    "contactPerson": "Process Engineer",
    "documents": [
      "Workflow Layout Diagram",
      "Process Mapping Schema",
      "Processing Equipment Spec"
    ]
  },
  "PE3": {
    "stepName": "Process Proof of Concept & Validation",
    "objective": "Build physical or digital simulations of the process flow to test baseline parameters.",
    "description": "Verify core process dynamics, document throughput limitations, and define initial process performance and stability envelopes.",
    "additionalInfo": "Key process performance indicators and engineering tolerances are identified.",
    "badge": "SCHRITT PE 03",
    "duration": "~3 Months",
    "contactPerson": "Process Engineer",
    "documents": [
      "Process Proof of Concept Report",
      "Cycle Time Simulation Logs",
      "Tolerances Baseline Sheet"
    ]
  },
  "PE4": {
    "stepName": "Process Standardization & Benchmarking",
    "objective": "Establish pilot-scale standard operating procedures (SOPs) for the process.",
    "description": "Run initial process validation cycles, test automation controls, and publish benchmark quality performance guidelines for reference execution.",
    "additionalInfo": "Draft operations templates and process controls are locked for evaluation.",
    "badge": "SCHRITT PE 04",
    "duration": "~4 Months",
    "contactPerson": "Process Engineer",
    "documents": [
      "Standard Operating Procedures (SOP)",
      "Quality Control Benchmark Registry"
    ]
  },
  "PE5": {
    "stepName": "Process Optimization & Capability Studies",
    "objective": "Perform thorough cycle-time reduction and yield optimization studies.",
    "description": "Identify and resolve processing bottlenecks, optimize supply chain feeds, and execute statistical process control (SPC) readiness audits.",
    "additionalInfo": "Optimized parameters are documented in the process control register.",
    "badge": "SCHRITT PE 05",
    "duration": "~6 Months",
    "contactPerson": "Process Engineer",
    "documents": [
      "Process Optimization Report",
      "Statistical Process Control Chart",
      "Yield Audit findings"
    ]
  },
  "PE6": {
    "stepName": "Scale-up & Pilot Process Validation",
    "objective": "Validate process consistency on a pilot-scale production line.",
    "description": "Complete formal failure mode and effects analysis (FMEA), optimize tooling configurations, and run pilot line validation sets.",
    "additionalInfo": "Draft manufacturing instructions and operations flows are finalized.",
    "badge": "SCHRITT PE 06",
    "duration": "~6 Months",
    "contactPerson": "Process Engineer",
    "documents": [
      "FMEA Risk Analysis Log",
      "Pilot-Scale Assembly Verification",
      "Tooling Optimization Register"
    ]
  },
  "PE7": {
    "stepName": "Production-Ready Process Qualification",
    "objective": "Formally qualify the end-to-end manufacturing process for volume execution.",
    "description": "Complete final process safety reviews, authorize standard process flows, and lock down quality management systems.",
    "additionalInfo": "Supply chain configurations and manufacturing capacities are qualified.",
    "badge": "SCHRITT PE 07",
    "duration": "~9 Months",
    "contactPerson": "Process Engineer",
    "documents": [
      "End-to-End Production Qualification",
      "Authorized Process Flow Specs",
      "Supply Chain Approval Ticket"
    ]
  },
  "PT1": {
    "stepName": "Planning & Initiation",
    "objective": "Define the scope, objectives, and resources required for the workflow project.",
    "description": "Phase 1 covers the initial planning activities including stakeholder identification, resource allocation, timeline development, and project charter creation. All key decisions made in this phase are documented in the project initiation document which serves as the authoritative reference throughout the workflow lifecycle.",
    "additionalInfo": "A kick-off meeting with all relevant stakeholders is held at the conclusion of this phase to align on goals and responsibilities.",
    "badge": "SCHRITT PHASE 01",
    "duration": "~2 hours",
    "contactPerson": "Chief Engineer",
    "documents": [
      "General Document A",
      "General Document B"
    ]
  },
  "PT2": {
    "stepName": "Execution & Monitoring",
    "objective": "Execute the planned workflow activities and monitor progress against defined KPIs.",
    "description": "Phase 2 is the primary execution phase where all workflow steps are actively carried out. Real-time dashboards track progress across all tasks and gates. Deviations from the plan are immediately flagged to the project manager for corrective action. Weekly status reports are generated automatically and distributed to stakeholders.",
    "additionalInfo": "This phase concludes when all planned tasks and gates have been successfully completed and formally closed.",
    "badge": "SCHRITT PHASE 02",
    "duration": "~5 hours",
    "contactPerson": "Chief Engineer",
    "documents": [
      "General Document A",
      "General Document B"
    ]
  },

  // =========================================================================
  // SECTION 4: MRL (Manufacturing Readiness Levels)
  // =========================================================================
  "MTT4": {
    "stepName": "Laboratory Production Capability",
    "objective": "Demonstrate manufacturing capability in a laboratory environment.",
    "description": "MRL 4 represents the capability to produce the technology in a laboratory environment. The required manufacturing processes are defined and tested at a small scale to produce initial prototypes.",
    "additionalInfo": "Initial quality control guidelines are established.",
    "badge": "SCHRITT MRL 04",
    "duration": "~4 Months",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Lab-Scale Prototyping Report",
      "Initial Tooling Requirements",
      "Scaling Parameters Log"
    ]
  },
  "MTT5": {
    "stepName": "Prototype Components in Production Environment",
    "objective": "Demonstrate prototype component production in a production-relevant environment.",
    "description": "Capability to produce prototype components in a production-relevant environment. Manufacturing processes are scaled up from the laboratory, using tooling and equipment similar to final production.",
    "additionalInfo": "Manufacturing cost models and potential bottlenecks are analyzed.",
    "badge": "SCHRITT MRL 05",
    "duration": "~6 Months",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Prototype Component Test Log",
      "Production-Relevant Tooling Spec",
      "Cost Model Worksheet"
    ]
  },
  "MTT6": {
    "stepName": "Prototype System in Production Environment",
    "objective": "Demonstrate subsystem/system production in a production-relevant environment.",
    "description": "Capability to produce a prototype system or subsystem in a production-relevant environment. Production processes are verified, and initial quality assurance frameworks are applied.",
    "additionalInfo": "Draft manufacturing instructions and operations flows are completed.",
    "badge": "SCHRITT MRL 06",
    "duration": "~6 Months",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Prototype System Assembly Guide",
      "Initial QA Framework Sign-Off",
      "Environmental Stress Reports"
    ]
  },
  "MTT7": {
    "stepName": "Production Representative System Capability",
    "objective": "Demonstrate component/subsystem production in a production-representative environment.",
    "description": "Capability to produce systems, subsystems, or components in a production-representative environment. Design is stabilized, and manufacturing processes are validated on a representative pilot line.",
    "additionalInfo": "Supply chain validation and supplier capabilities are confirmed.",
    "badge": "SCHRITT MRL 07",
    "duration": "~9 Months",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Pilot Production Line Report",
      "Supply Chain Audit Findings",
      "Representative Run Checklist"
    ]
  },
  "MTT8": {
    "stepName": "Pilot Line Capability Demonstrated",
    "objective": "Demonstrate pilot line capability and readiness for low rate initial production.",
    "description": "Pilot line capability is fully demonstrated. All manufacturing processes, tooling, quality management systems, and personnel training are in place for Low Rate Initial Production (LRIP).",
    "additionalInfo": "Manufacturing readiness review is completed successfully.",
    "badge": "SCHRITT MRL 08",
    "duration": "~12 Months",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Low Rate Initial Production Plan",
      "Operator Training Certification",
      "Quality Management Manual"
    ]
  },
  "MTT9": {
    "stepName": "Low Rate Production Demonstrated",
    "objective": "Demonstrate low rate production and capability to begin full rate production.",
    "description": "Low rate production is demonstrated. Production processes are stable, quality yields are acceptable, and the capability is in place to begin Full Rate Production (FRP).",
    "additionalInfo": "Detailed yield analysis and process capability studies are conducted.",
    "badge": "SCHRITT MRL 09",
    "duration": "~12 Months",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Full Rate Production Transition Review",
      "Yield Optimization Report",
      "Production Line Audit Logs"
    ]
  },
  "MTT10": {
    "stepName": "Full Rate Production Demonstrated",
    "objective": "Achieve full rate production and implement lean practices.",
    "description": "Full Rate Production is demonstrated and lean production practices are in place. Manufacturing processes are optimized for maximum efficiency, minimum waste, and consistent quality.",
    "additionalInfo": "Continuous improvement programs are active to optimize unit costs.",
    "badge": "SCHRITT MRL 10",
    "duration": "Continuous",
    "contactPerson": "Manufacturing Lead",
    "documents": [
      "Lean Manufacturing Optimization Log",
      "Continuous Improvement Log",
      "Unit Cost Analysis Sheet"
    ]
  },

  // =========================================================================
  // SECTION 5: Gate Milestones
  // =========================================================================
  "gate_start": {
    "stepName": "Project Initiation Gate",
    "objective": "Formally authorize the start of the project.",
    "description": "The Start gate represents project initiation. All initial concepts, team assignments, and high-level requirements are approved to proceed into phase A.",
    "additionalInfo": "Key milestone for project kickoff.",
    "badge": "SCHRITT Gate Start",
    "duration": "Milestone",
    "contactPerson": "Project Sponsor",
    "documents": [
      "Project Initiation Document (PID)",
      "Stakeholder Alignment Charter",
      "Business Case Validation"
    ]
  },
  "gate_1": {
    "stepName": "Preliminary Design Gate (Gate 1)",
    "objective": "Verify preliminary design maturity and feasibility.",
    "description": "Gate 1 reviews the feasibility of the preliminary system architecture and ensures that initial technology requirements are met before proceeding.",
    "additionalInfo": "Requires successful Preliminary Design Review (PDR).",
    "badge": "SCHRITT Gate 1",
    "duration": "Milestone",
    "contactPerson": "PDR Review Board",
    "documents": [
      "Gate 1 Clearance Certificate",
      "PDR Sign-Off Checklist",
      "Preliminary Architecture Review"
    ]
  },
  "gate_2": {
    "stepName": "Detailed Design Gate (Gate 2)",
    "objective": "Approve detailed design specifications and subsystem integration.",
    "description": "Gate 2 assesses detailed system designs, interface definitions, and safety reviews to authorize physical prototyping phases.",
    "additionalInfo": "Requires successful Critical Design Review (CDR).",
    "badge": "SCHRITT Gate 2",
    "duration": "Milestone",
    "contactPerson": "CDR Review Board",
    "documents": [
      "Gate 2 Clearance Certificate",
      "CDR Sign-Off Checklist",
      "Safety Case Analysis Report"
    ]
  },
  "gate_3": {
    "stepName": "Production Readiness Gate (Gate 3)",
    "objective": "Evaluate manufacturing capabilities and prototype test results.",
    "description": "Gate 3 verifies that prototype testing matches baseline requirements and that manufacturing facilities are ready for full production.",
    "additionalInfo": "Requires successful Production Readiness Review (PRR).",
    "badge": "SCHRITT Gate 3",
    "duration": "Milestone",
    "contactPerson": "Production Auditor",
    "documents": [
      "Gate 3 Clearance Certificate",
      "PRR Sign-Off Checklist",
      "Prototype Testing Acceptance"
    ]
  },
  "gate_4": {
    "stepName": "Operational Readiness Gate (Gate 4)",
    "objective": "Authorize final deployment and operations phase.",
    "description": "Gate 4 confirms that all manufacturing and technology integration milestones are met, and authorizes the system for active field operations.",
    "additionalInfo": "Final gate before operational deployment.",
    "badge": "SCHRITT Gate 4",
    "duration": "Milestone",
    "contactPerson": "Operations Inspector",
    "documents": [
      "Gate 4 Clearance Certificate",
      "Flight Operations Sign-Off",
      "Final Readiness Review"
    ]
  },

  // =========================================================================
  // SECTION 6: Task Nodes (T1 - T6)
  // =========================================================================
  "T1": {
    "stepName": "Initial Client Onboarding",
    "objective": "Establish secure communication and data protocols with new client stakeholders.",
    "description": "This step encompasses the initial touchpoints between the platform and client systems. The onboarding agent validates API credentials, maps client-side data schemas to internal canonical formats, and establishes encrypted session tokens. All handshakes follow OAuth 2.0 with PKCE extension for maximum security compliance.",
    "additionalInfo": "Upon successful completion, the workflow automatically proceeds to the Validation stage where data integrity checks are performed.",
    "badge": "SCHRITT 01",
    "duration": "~30 min",
    "contactPerson": "Onboarding Agent",
    "documents": [
      "Engine Requirements Specification",
      "Compliance Matrix",
      "Test & Qualification Plan",
      "Manufacturing Readiness Checklist"
    ]
  },
  "T2": {
    "stepName": "Data Validation",
    "objective": "Validate and sanitize incoming data to ensure accuracy and completeness.",
    "description": "In this phase, the system runs automated validation routines across all ingested data fields. This includes schema conformity checks, null-value detection, range validation for numeric fields, and format verification for dates and identifiers. Any anomalies are flagged for manual review.",
    "additionalInfo": "Once all data passes validation, it is queued for transformation and normalization in the next step.",
    "badge": "SCHRITT 02",
    "duration": "~20 min",
    "contactPerson": "Data Architect",
    "documents": [
      "Data Validation Standards",
      "Schema Definition Report",
      "Validation Verification Checklist"
    ]
  },
  "T3": {
    "stepName": "Data Transformation",
    "objective": "Transform raw data into the standardized internal format required for processing.",
    "description": "This step applies a series of transformation rules to convert incoming data into the platform's canonical format. Field mappings, unit conversions, and data enrichment processes are executed here. The transformation pipeline is configurable per client and runs in a fully audited mode.",
    "additionalInfo": "Transformed records are stored in the staging area and await further downstream processing steps.",
    "badge": "SCHRITT 03",
    "duration": "~25 min",
    "contactPerson": "Systems Integrator",
    "documents": [
      "ETL Mapping Document",
      "Data Quality Rules",
      "Transformation Pipeline Logs"
    ]
  },
  "T4": {
    "stepName": "Quality Assurance Review",
    "objective": "Conduct a thorough QA review of all transformed data before final submission.",
    "description": "The QA Review step involves both automated and manual review of data quality metrics. Automated scripts check for consistency across records, while human reviewers assess edge cases flagged by the system. A sign-off from the QA team is required before the data proceeds.",
    "additionalInfo": "Any data failing QA is routed back to the Data Validation step with annotated error reports.",
    "badge": "SCHRITT 04",
    "duration": "~40 min",
    "contactPerson": "QA Lead",
    "documents": [
      "QA Test Suite Log",
      "Compliance Check Report",
      "QA Release Sign-Off Sheet"
    ]
  },
  "T5": {
    "stepName": "Approval & Sign-off",
    "objective": "Obtain formal approval from authorized stakeholders to proceed with deployment.",
    "description": "This step requires formal sign-off from department heads and compliance officers. The approval workflow routes documents to the appropriate stakeholders in sequence, collects digital signatures, and logs all approval actions with timestamps for full audit traceability.",
    "additionalInfo": "Upon receiving all required approvals, the workflow is automatically unlocked to proceed to the deployment phase.",
    "badge": "SCHRITT 05",
    "duration": "~15 min",
    "contactPerson": "Program Director",
    "documents": [
      "Executive Sign-Off Certificate",
      "Stakeholder Review Notes",
      "Approval Manifest"
    ]
  },
  "T6": {
    "stepName": "Deployment & Integration",
    "objective": "Deploy the processed data and integrate it with downstream systems.",
    "description": "The Deployment step pushes finalized, validated data packages to target systems via secure API endpoints. Integration tests are run automatically post-deployment to verify data availability and system responsiveness. Rollback procedures are in place in case of deployment failures.",
    "additionalInfo": "Deployment logs and integration test results are archived for compliance and future auditing purposes.",
    "badge": "SCHRITT 06",
    "duration": "~35 min",
    "contactPerson": "Release Engineer",
    "documents": [
      "Deployment Checklist",
      "Rollback Procedure Playbook",
      "API Integration Test Results"
    ]
  },

  // =========================================================================
  // SECTION 7: Gateway Nodes (G1 - G8)
  // =========================================================================
  "G1": {
    "stepName": "Initial Compliance Check",
    "objective": "Verify that all submitted documents meet compliance requirements.",
    "description": "The Initial Compliance Check is an automated gate that evaluates incoming submissions against a predefined regulatory checklist. Documents that fail are returned with specific error codes and remediation instructions. Only fully compliant submissions advance to the next stage.",
    "additionalInfo": "This gate runs 24/7 and typically completes within minutes of submission receipt.",
    "badge": "SCHRITT GATE 01",
    "duration": "~10 min",
    "contactPerson": "Compliance Officer",
    "documents": [
      "Regulatory Compliance Checklist",
      "Initial Submission Audit Log"
    ]
  },
  "G2": {
    "stepName": "Risk Assessment Gate",
    "objective": "Assess and score the risk level associated with the current workflow submission.",
    "description": "This gate applies a multi-factor risk scoring model to each submission. Factors include client history, data volume, regulatory jurisdiction, and prior incident records. Submissions scoring above a defined risk threshold are escalated to senior review teams.",
    "additionalInfo": "Risk scores are logged and used to continuously improve the scoring model through machine learning feedback loops.",
    "badge": "SCHRITT GATE 02",
    "duration": "~15 min",
    "contactPerson": "Risk Specialist",
    "documents": [
      "Risk Scoring Matrix",
      "Escalation Action Plan",
      "Hazard Log Register"
    ]
  },
  "G3": {
    "stepName": "Technical Feasibility Gate",
    "objective": "Confirm that all technical prerequisites are met before proceeding.",
    "description": "The Technical Feasibility Gate checks system resource availability, API compatibility, and integration readiness with target platforms. Automated pings to dependent services confirm uptime and response times meet SLA thresholds before the workflow is allowed to continue.",
    "additionalInfo": "If any dependent service is unavailable, the gate automatically retries at set intervals before escalating to the operations team.",
    "badge": "SCHRITT GATE 03",
    "duration": "~12 min",
    "contactPerson": "Technical Lead",
    "documents": [
      "Technical Feasibility Report",
      "Dependency Service SLA Logs",
      "Architecture Interface Schema"
    ]
  },
  "G4": {
    "stepName": "Budget Authorization Gate",
    "objective": "Ensure that the workflow has the necessary budget authorization to proceed.",
    "description": "This gate interfaces with the financial management system to confirm that the associated budget code has sufficient allocation for the current workflow phase. It validates approval limits against the requestor's authorization level and flags any over-budget scenarios for escalation.",
    "additionalInfo": "Budget checks are performed in real-time against the live financial ledger to prevent stale data issues.",
    "badge": "SCHRITT GATE 04",
    "duration": "~8 min",
    "contactPerson": "Financial Controller",
    "documents": [
      "Budget Authorization Ticket",
      "Financial Allocation Receipt",
      "Cost Ledger Extract"
    ]
  },
  "G5": {
    "stepName": "Security Clearance Gate",
    "objective": "Validate security clearance levels for all personnel involved in the workflow.",
    "description": "The Security Clearance Gate cross-references the identities of all workflow participants against the organization's clearance database. It ensures that each participant has the minimum required clearance level for the data sensitivity classification of the current submission.",
    "additionalInfo": "Clearance validations are time-stamped and form part of the security audit trail required for regulatory reporting.",
    "badge": "SCHRITT GATE 05",
    "duration": "~18 min",
    "contactPerson": "Security Analyst",
    "documents": [
      "Identity Clearance Registry",
      "Security Clearance Log",
      "Access Control Policy"
    ]
  },
  "G6": {
    "stepName": "Legal Review Gate",
    "objective": "Ensure all workflow documentation passes legal review and is free of liability risks.",
    "description": "This gate routes submission packages to the legal review team for analysis. Legal reviewers check contractual terms, intellectual property considerations, liability clauses, and jurisdictional compliance. The gate remains open until legal sign-off is received.",
    "additionalInfo": "Legal review outcomes are stored in the compliance archive for future reference and regulatory inspections.",
    "badge": "SCHRITT GATE 06",
    "duration": "~45 min",
    "contactPerson": "Legal Counsel",
    "documents": [
      "Contractual Liability Review",
      "Intellectual Property Sign-Off",
      "Nondisclosure Agreements"
    ]
  },
  "G7": {
    "stepName": "Final Validation Gate",
    "objective": "Perform a final end-to-end validation before the workflow reaches completion.",
    "description": "The Final Validation Gate is a comprehensive checkpoint that re-runs critical validation routines from earlier stages. It verifies data integrity, checks all approvals are in place, confirms budget and security clearances, and generates a final validation report that accompanies the workflow to its conclusion.",
    "additionalInfo": "This gate is the last automated checkpoint. Any failures here trigger a full escalation to the workflow owner and operations team.",
    "badge": "SCHRITT GATE 07",
    "duration": "~22 min",
    "contactPerson": "Chief Validator",
    "documents": [
      "End-to-End Verification Checksheet",
      "System Integrity Audit Report",
      "Test Coverage Matrix"
    ]
  },
  "G8": {
    "stepName": "Executive Approval Gate",
    "objective": "Obtain final executive-level approval before workflow closure.",
    "description": "This is the highest-level approval gate in the workflow. The executive approver reviews a consolidated summary of all prior gates, validations, and reviews. Upon approval, the workflow is marked as complete and all associated records are archived. Rejection at this stage requires a full process restart.",
    "additionalInfo": "Executive approvals are digitally signed and stored in the immutable compliance ledger for regulatory purposes.",
    "badge": "SCHRITT GATE 08",
    "duration": "~30 min",
    "contactPerson": "Executive Approver",
    "documents": [
      "Executive Approval Order",
      "Immutable Compliance Ledger Hash",
      "Board Review Minutes"
    ]
  },

  // =========================================================================
  // SECTION 8: Review & Validation Paths / Infrastructure Components
  // =========================================================================
  "PH1": {
    "stepName": "Initial Phase / Step 1",
    "objective": "Initialize the project environment and set up primary guidelines.",
    "description": "This initial phase defines core boundaries, stakeholders, and preliminary scope of work. Basic workflows are established, and environment initialization protocols are executed.",
    "additionalInfo": "Key outputs include project charter approval and baseline requirement document.",
    "badge": "SCHRITT Phase 1",
    "duration": "1 Week",
    "contactPerson": "Review Board Director",
    "documents": [
      "Phase 1 Project Initialization Log",
      "Project Charter Approval"
    ]
  },
  "PH2": {
    "stepName": "Development Phase / Step 2",
    "objective": "Execute requirements design and initial system architecture prototyping.",
    "description": "Detailed system design phase including user journey mapping, high-level interface mockups, database schema design, and technical feasibility studies.",
    "additionalInfo": "Concludes with a formal architecture review and sign-off for development kickoff.",
    "badge": "SCHRITT Phase 2",
    "duration": "3 Weeks",
    "contactPerson": "Review Board Director",
    "documents": [
      "Phase 2 Design & Prototyping Spec",
      "User Journey Flowmaps"
    ]
  },
  "EF": {
    "stepName": "Execution Framework",
    "objective": "Define and structure the initial execution framework parameters.",
    "description": "The Execution Framework (EF) establishes the fundamental operating principles and execution baselines necessary for consistent system performance.",
    "additionalInfo": "Provides standardized governance guidelines and runtime parameters for all modules.",
    "badge": "SCHRITT EF",
    "duration": "10 Days",
    "contactPerson": "Review Board Director",
    "documents": [
      "EF Runtime Configuration Log",
      "Operating Principles Matrix"
    ]
  },
  "SA": {
    "stepName": "System Architecture",
    "objective": "Design and document the system-level architectural blueprint.",
    "description": "The System Architecture (SA) phase outlines the software components, network infrastructure, data schemas, and deployment topologies.",
    "additionalInfo": "Ensures scalability, reliability, and security standards are enforced across all boundaries.",
    "badge": "SCHRITT SA",
    "duration": "2 Weeks",
    "contactPerson": "Review Board Director",
    "documents": [
      "System Component Interface Specs",
      "Architectural Blueprint"
    ]
  },
  "SF": {
    "stepName": "Safety & Feasibility",
    "objective": "Conduct safety analysis and feasibility verification.",
    "description": "The Safety & Feasibility (SF) phase evaluates operational risks, fail-safe scenarios, and conducts structural reliability assessments.",
    "additionalInfo": "Ensures compliance with aerospace, defense, or industrial safety regulations.",
    "badge": "SCHRITT SF",
    "duration": "12 Days",
    "contactPerson": "Review Board Director",
    "documents": [
      "Aerospace Safety Certification Log",
      "Operational Risk Assessment"
    ]
  },
  "ETF": {
    "stepName": "Engineering & Technical Foundation",
    "objective": "Establish core physical and mathematical engineering foundations.",
    "description": "The Engineering & Technical Foundation (ETF) defines standard formulas, mathematical models, material specifications, and engineering tools to be used throughout the design lifecycle.",
    "additionalInfo": "Approved by lead scientists and structural engineers prior to detailed design.",
    "badge": "SCHRITT ETF",
    "duration": "3 Weeks",
    "contactPerson": "Review Board Director",
    "documents": [
      "Mathematical Model Specifications",
      "Engineering Formulas Reference"
    ]
  },
  "VP": {
    "stepName": "Validation Phase",
    "objective": "Validate that all system requirements and user expectations are met.",
    "description": "The Validation Phase (VP) ensures that the developed system operates as intended, meets user needs, and complies with all quality control standards.",
    "additionalInfo": "Includes final user acceptance testing (UAT) and pre-launch quality audits.",
    "badge": "SCHRITT VP",
    "duration": "2 Weeks",
    "contactPerson": "Review Board Director",
    "documents": [
      "User Acceptance Testing (UAT) Log",
      "Validation Phase Report"
    ]
  },
  "SI": {
    "stepName": "System Implementation",
    "objective": "Deploy the validated system to the production environment.",
    "description": "The System Implementation (SI) phase involves the official rollout of the system. This includes user training, final deployment configurations, and transitional support.",
    "additionalInfo": "Monitored closely by the devops and operations teams during the initial launch week.",
    "badge": "SCHRITT SI",
    "duration": "10 Days",
    "contactPerson": "Review Board Director",
    "documents": [
      "Production Launch Checklist",
      "Implementation Sign-Off Sheets"
    ]
  },
  "Arrow_A": {
    "stepName": "Vertical Transition Path A",
    "objective": "Coordinate concept definition alignment between phases.",
    "description": "Path A establishes vertical alignment to ensure that initial project concepts and operational requirements are mapped directly to downstream development.",
    "additionalInfo": "Key integration point for high-level system requirements.",
    "badge": "SCHRITT Path A",
    "duration": "Ongoing",
    "contactPerson": "Chief Engineer",
    "documents": [
      "Vertical Transition Alignment Checklist A"
    ]
  },
  "Arrow_T": {
    "stepName": "Vertical Transition Path T",
    "objective": "Coordinate design implementation alignment between phases.",
    "description": "Path T establishes vertical alignment to ensure that preliminary design reviews (PDR) and physical engineering parameters map correctly to the active technology evaluation steps.",
    "additionalInfo": "Key integration point for physical engineering validation.",
    "badge": "SCHRITT Path T",
    "duration": "Ongoing",
    "contactPerson": "Chief Engineer",
    "documents": [
      "Vertical Transition Alignment Checklist T"
    ]
  },
  "PER": {
    "stepName": "Process Engineering Review (PER)",
    "objective": "Conduct comprehensive process reviews.",
    "description": "The PER phase focuses on evaluating engineering documentation, equipment specs, and process flows to ensure conformance to quality standards.",
    "additionalInfo": "Governs steps EF, SA, SF, and ETF.",
    "badge": "SCHRITT PER",
    "duration": "Ongoing",
    "contactPerson": "Process Engineer",
    "documents": [
      "Process Engineering Level R Report"
    ]
  },
  "PERH": {
    "stepName": "Process Engineering Readiness Review (PERH)",
    "objective": "Verify operational readiness and equipment integration.",
    "description": "The PERH phase reviews system integrations and operational readiness criteria before initiating validation testing phases.",
    "additionalInfo": "Governs steps VP and SI.",
    "badge": "SCHRITT PERH",
    "duration": "Ongoing",
    "contactPerson": "Process Engineer",
    "documents": [
      "Process Engineering Level RH Report"
    ]
  }
};
