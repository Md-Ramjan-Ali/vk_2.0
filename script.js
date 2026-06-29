document.addEventListener("DOMContentLoaded", () => {
  // ── References ─────────────────────────────────────────────────
  const canvasRoot = document.getElementById("canvas-root");
  const canvasWrapper = document.getElementById("canvas-wrapper");
  const canvasContainer = document.getElementById("canvas-container");
  const drawer = document.getElementById("drawer-panel");

  // ── Constants ──────────────────────────────────────────────────
  const DESIGN_W = 1540; // total canvas width
  const CONTENT_W = 1540;
  const DESIGN_H = 1080;

  let drawerOpen = false;
  let zoomMultiplier = 1.0;

  // ── Scale + Clip canvas ─────────────────────────────────────────
  function applyLayout() {
    if (!canvasRoot || !canvasWrapper) return;

    // Update wrapper width dynamically based on drawer state
    canvasWrapper.style.width = drawerOpen ? "calc(100% - 360px)" : "100%";
    canvasWrapper.style.height = "100%";
    canvasWrapper.style.overflow = drawerOpen ? "hidden" : "auto";

    const vw = canvasWrapper.clientWidth;

    // Calculate scale to fit viewport width (with spacing accounted for)
    const baseScale = (vw - 48 - 4) / DESIGN_W;

    const scale = baseScale * zoomMultiplier;

    // Calculate translation offsets to maintain constant 4px spacing from top navbar and left sidebar
    const xOffset = 48 * (1 - scale) + 4; // 48px is fixed sidebar width, 4px spacing
    const yOffset = 80 * (1 - scale) + 28; // 80px is fixed navbar height, 18px spacing (adds 14px cushion)

    // Apply scale, translation, and width to canvas-root
    canvasRoot.style.width = DESIGN_W + "px";
    canvasRoot.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(${scale})`;
    canvasRoot.style.transformOrigin = "top left";

    // Set canvas-container layout size to match scaled size so scroll bounds are accurate
    if (canvasContainer) {
      canvasContainer.style.width =
        Math.ceil(DESIGN_W * scale + xOffset) + "px";
      canvasContainer.style.height =
        Math.ceil(DESIGN_H * scale + yOffset) + "px";
    }
  }

  applyLayout();
  window.addEventListener("resize", applyLayout);

  // ── Zoom Controls ────────────────────────────────────────────────
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");
  const zoomText = document.getElementById("zoom-text");

  function updateZoom(newZoom) {
    // Clamp zoom multiplier between 0.5 (50%) and 3.0 (300%)
    zoomMultiplier = Math.max(0.5, Math.min(3.0, newZoom));

    const pct = Math.round(zoomMultiplier * 100) + "%";
    if (zoomText) zoomText.textContent = pct;

    applyLayout();
  }

  if (zoomIn) {
    zoomIn.addEventListener("click", (e) => {
      e.stopPropagation();
      updateZoom(zoomMultiplier + 0.1);
    });
  }
  if (zoomOut) {
    zoomOut.addEventListener("click", (e) => {
      e.stopPropagation();
      updateZoom(zoomMultiplier - 0.1);
    });
  }

  // ── Drag-to-Pan (Mouse & Touch) ─────────────────────────────────
  let isDown = false;
  let startX, startY;
  let scrollLeft, scrollTop;

  if (canvasWrapper) {
    canvasWrapper.style.cursor = "";

    canvasWrapper.addEventListener("mousedown", (e) => {
      // Don't drag if clicking zoom controls, the drawer, the fixed navbar, fixed sidebar, or clickable nodes
      if (
        e.target.closest("#fixed-zoom-controls") ||
        e.target.closest("#drawer-panel") ||
        e.target.closest("#left-sidebar-grid-btn") ||
        e.target.closest("#left-navigation-drawer") ||
        e.target.closest(".cursor-pointer") ||
        e.target.closest('[data-name="Background+HorizontalBorder"]') ||
        e.target.closest('[data-name="Nav"]')
      ) {
        return;
      }
      isDown = true;
      canvasWrapper.style.cursor = "grabbing";
      startX = e.pageX - canvasWrapper.offsetLeft;
      startY = e.pageY - canvasWrapper.offsetTop;
      scrollLeft = canvasWrapper.scrollLeft;
      scrollTop = canvasWrapper.scrollTop;
    });

    canvasWrapper.addEventListener("mouseleave", () => {
      isDown = false;
      canvasWrapper.style.cursor = "";
    });

    canvasWrapper.addEventListener("mouseup", () => {
      isDown = false;
      canvasWrapper.style.cursor = "";
    });

    canvasWrapper.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - canvasWrapper.offsetLeft;
      const y = e.pageY - canvasWrapper.offsetTop;
      const walkX = (x - startX) * 1.5;
      const walkY = (y - startY) * 1.5;
      canvasWrapper.scrollLeft = scrollLeft - walkX;
      canvasWrapper.scrollTop = scrollTop - walkY;
    });

    // Touch support for mobile devices
    canvasWrapper.addEventListener(
      "touchstart",
      (e) => {
        if (
          e.target.closest("#fixed-zoom-controls") ||
          e.target.closest("#drawer-panel") ||
          e.target.closest(".cursor-pointer") ||
          e.target.closest('[data-name="Background+HorizontalBorder"]') ||
          e.target.closest('[data-name="Nav"]')
        ) {
          return;
        }
        isDown = true;
        startX = e.touches[0].pageX - canvasWrapper.offsetLeft;
        startY = e.touches[0].pageY - canvasWrapper.offsetTop;
        scrollLeft = canvasWrapper.scrollLeft;
        scrollTop = canvasWrapper.scrollTop;
      },
      { passive: true },
    );

    canvasWrapper.addEventListener("touchend", () => {
      isDown = false;
    });

    canvasWrapper.addEventListener(
      "touchmove",
      (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - canvasWrapper.offsetLeft;
        const y = e.touches[0].pageY - canvasWrapper.offsetTop;
        const walkX = (x - startX) * 1.5;
        const walkY = (y - startY) * 1.5;
        canvasWrapper.scrollLeft = scrollLeft - walkX;
        canvasWrapper.scrollTop = scrollTop - walkY;
      },
      { passive: true },
    );
  }

  // ── Hide drawer on load ─────────────────────────────────────────
  if (drawer) drawer.style.display = "none";

  // ── Open ────────────────────────────────────────────────────────
  function openDrawer() {
    if (!drawer) return;
    drawerOpen = true;
    drawer.style.display = "flex";

    // Keep zoom controls fixed at default position

    // Small timeout to allow transition to register
    setTimeout(() => {
      drawer.classList.remove("translate-x-full");
    }, 10);
    applyLayout();
  }

  // ── Close ───────────────────────────────────────────────────────
  function closeDrawer() {
    if (!drawer) return;
    drawerOpen = false;
    drawer.classList.add("translate-x-full");

    // Keep zoom controls fixed at default position

    // Hide drawer completely only after transition ends
    const handleTransition = (e) => {
      if (e.propertyName === "transform") {
        if (!drawerOpen) {
          drawer.style.display = "none";
        }
        drawer.removeEventListener("transitionend", handleTransition);
      }
    };
    drawer.addEventListener("transitionend", handleTransition);
    applyLayout();
  }

  // ── × Close Button ──────────────────────────────────────────────
  const closeBtn = document.getElementById("drawer-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  // ── Populate drawer ─────────────────────────────────────────────
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // ── Navbar Progress Bar ──────────────────────────────────────────
  // Step order matches the workflow design: TE (Start) → SI (End = 100%)
  const STEP_ORDER = [
    // ── TE is the START POINT → shows minimal progress ──
    'TE',

    // ── TE Phases 1–4 ──
    'TE1', 'TE2', 'TE3', 'TE4',

    'Arrow_A',

    // ── TE Row: Start Gate + Task Diamonds ──

    'T1', 'T2', 'T3', 'T4', 'T5', 'T6',

    // ── Gate Milestones ──
    'gate_start',

    'Arrow_T',

    'gate_1', 'gate_2', 'gate_3', 'gate_4',

    // ── PT + PE Steps ──
    'PT1', 'PT2',
    'PE', 'PE1', 'PE2', 'PE3', 'PE4', 'PE5', 'PE6', 'PE7',

    'PH1', 'PH2',

    // ── Phase Arrows A→E ──
    'A', 'B', 'C', 'D', 'E',

    // ── G Gate Diamonds ──
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8',

    // ── MRL Row (MTT) ──
    'MTT4', 'MTT5', 'MTT6', 'MTT7', 'MTT8', 'MTT9', 'MTT10',

    // ── PER Section ──
    'PER', 'EF', 'SA', 'SF', 'ETF',

    // ── PERH Section → END ──
    'PERH', 'VP', 'SI'          // ← SI = 100%
  ];

  function updateNavbarProgress(key) {
    const idx = STEP_ORDER.indexOf(key);
    if (idx === -1) return; // step not in order list — skip
    const percent = Math.round(((idx + 1) / STEP_ORDER.length) * 100);
    const bar = document.getElementById('navbar-progress-bar');
    const label = document.getElementById('navbar-progress-percent');
    if (bar) bar.style.width = percent + '%';
    if (label) label.textContent = percent + '%';
  }

  function populateDrawer(key) {
    // Update navbar progress bar based on step order
    updateNavbarProgress(key);

    const d = typeof stepsData !== "undefined" ? stepsData[key] : null;
    if (!d) {
      setText("drawer-title", "Process Details");
      setText("drawer-step-name", key);
      setText("drawer-objective", "No info available.");
      setText("drawer-description", "");
      setText("drawer-additional-info", "");
      setText("metadata-step", key);
      setText("metadata-duration", "--");
      setText("metadata-contact", "--");

      const docList = document.getElementById("drawer-documents-list");
      const docSection = document.getElementById("drawer-documents-section");
      if (docList) docList.innerHTML = "";
      if (docSection) docSection.style.display = "none";
      return;
    }
    setText("drawer-title", "Process Details");
    setText("drawer-step-name", d.stepName || key);
    setText("drawer-objective", d.objective || "");
    setText("drawer-description", d.description || "");
    setText("drawer-additional-info", d.additionalInfo || "");

    setText("metadata-step", d.badge || key);
    setText("metadata-duration", d.duration || "--");
    setText("metadata-contact", d.contactPerson || "--");

    const docList = document.getElementById("drawer-documents-list");
    const docSection = document.getElementById("drawer-documents-section");
    if (docList && docSection) {
      docList.innerHTML = "";
      if (d.documents && d.documents.length > 0) {
        docSection.style.display = "flex";
        d.documents.forEach(doc => {
          const li = document.createElement("li");
          li.className = "document-item";
          li.innerHTML = `
            <svg class="document-icon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H256c-17.7 0-32-14.3-32-32zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zM384 121.9v6.1H256V0h6.1c5.3 0 10.4 2.1 14.1 5.9l107.9 107.9c3.8 3.7 5.9 8.8 5.9 14.1z"/>
            </svg>
            <span>${doc}</span>
          `;
          docList.appendChild(li);
        });
      } else {
        docSection.style.display = "none";
      }
    }
  }

  // ── Step key from node ──────────────────────────────────────────
  function getStepKey(node) {
    if (node.hasAttribute("data-step")) {
      const ds = node.getAttribute("data-step");
      if (typeof stepsData !== "undefined" && stepsData[ds] !== undefined)
        return ds;
    }
    const p = node.querySelector("p");
    if (p && typeof stepsData !== "undefined") {
      const t = p.textContent.trim();
      if (stepsData[t] !== undefined) return t;
    }
    return null;
  }

  // ── Click events ────────────────────────────────────────────────
  document.querySelectorAll(".cursor-pointer, .parent-cursor-pointer").forEach((node) => {
    // Skip left sidebar grid button and close button to prevent conflicts with dedicated toggle listeners
    if (node.id === "left-sidebar-grid-btn" || node.id === "left-drawer-close-btn") {
      return;
    }
    node.addEventListener("click", (e) => {
      if (e.target.closest(".pointer-events-none")) {
        return;
      }
      e.stopPropagation();
      const key = getStepKey(node);
      if (key) {
        populateDrawer(key);
        openDrawer();
      }
    });
  });


  // Open TE by default on page load
  populateDrawer("TE");
  openDrawer();

  // ── Theme Switcher Logic ──────────────────────────────────────────
  const themeToggleBtn = document.getElementById("theme-toggle-btn");

  function getTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  // Initialize theme on load
  applyTheme(getTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  // ── Search Functionality Logic ────────────────────────────────────
  const searchToggleBtn = document.getElementById("search-toggle-btn");
  const searchDropdown = document.getElementById("search-dropdown");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (searchToggleBtn && searchDropdown) {
    // Toggle dropdown visibility
    searchToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = searchDropdown.classList.contains("hidden");
      if (isHidden) {
        searchDropdown.classList.remove("hidden");
        if (searchInput) {
          searchInput.value = "";
          if (searchResults) searchResults.innerHTML = "";
          searchInput.focus();
        }
      } else {
        searchDropdown.classList.add("hidden");
      }
    });

    // Prevent closing when clicking inside the dropdown
    searchDropdown.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      searchDropdown.classList.add("hidden");
    });
  }

  // Highlight matched search term helper
  function highlightKeyword(text, keyword) {
    if (!text) return "";
    const lowerText = text.toLowerCase();
    const idx = lowerText.indexOf(keyword);
    if (idx === -1) return text;
    const matchLen = keyword.length;
    return (
      text.substring(0, idx) +
      `<span class="search-highlight">${text.substring(idx, idx + matchLen)}</span>` +
      text.substring(idx + matchLen)
    );
  }

  // Perform search filtering
  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase().trim();
      searchResults.innerHTML = "";

      if (val === "" || typeof stepsData === "undefined") {
        return;
      }

      const matches = [];

      // Scan all nodes in stepsData
      for (const stepKey in stepsData) {
        if (stepsData.hasOwnProperty(stepKey)) {
          const stepObj = stepsData[stepKey];
          let matchedField = "";
          let matchedText = "";

          // 1. Check if the Step ID itself matches (e.g. searching "T1" or "A")
          if (stepKey.toLowerCase().includes(val)) {
            matchedField = "Step ID";
            matchedText = stepObj.stepName || stepKey;
          }

          // 2. Prioritized metadata fields
          if (!matchedField) {
            const priorityKeys = [
              { key: "stepName", label: "Name" },
              { key: "objective", label: "Objective" },
              { key: "description", label: "Description" },
              { key: "additionalInfo", label: "Additional Info" },
              { key: "owner", label: "Owner" },
              { key: "aircraft", label: "Aircraft" },
              { key: "tailNo", label: "Tail No." },
              { key: "status", label: "Status" },
              { key: "duration", label: "Duration" }
            ];

            for (const item of priorityKeys) {
              const fieldVal = stepObj[item.key];
              if (fieldVal && typeof fieldVal === "string" && fieldVal.toLowerCase().includes(val)) {
                matchedField = item.label;
                matchedText = fieldVal;
                break;
              }
            }
          }

          // 3. Scan the documents array items
          if (!matchedField && stepObj.documents && Array.isArray(stepObj.documents)) {
            for (const doc of stepObj.documents) {
              if (doc && doc.toLowerCase().includes(val)) {
                matchedField = "Document";
                matchedText = doc;
                break;
              }
            }
          }

          // 4. Fallback search for any other string values
          if (!matchedField) {
            for (const key in stepObj) {
              if (stepObj.hasOwnProperty(key)) {
                const valStr = stepObj[key];
                if (valStr && typeof valStr === "string" && valStr.toLowerCase().includes(val)) {
                  // Convert camelCase key name to human-readable label (e.g. badgeName -> Badge Name)
                  matchedField = key.replace(/([A-Z])/g, " $1").trim();
                  matchedField = matchedField.charAt(0).toUpperCase() + matchedField.slice(1);
                  matchedText = valStr;
                  break;
                }
              }
            }
          }

          if (matchedField) {
            matches.push({
              key: stepKey,
              field: matchedField,
              text: matchedText
            });
          }
        }
      }

      // Display results
      if (matches.length > 0) {
        matches.forEach((match) => {
          const li = document.createElement("li");
          li.className = "search-result-item";

          const highlightedSnippet = highlightKeyword(match.text, val);

          li.innerHTML = `
            <div class="search-result-header">
              <span class="search-result-node">${match.key}</span>
              <span class="search-result-field">${match.field}</span>
            </div>
            <div class="search-result-text">${highlightedSnippet}</div>
          `;

          // Click handler to open, center and flash node
          li.addEventListener("click", () => {
            populateDrawer(match.key);
            openDrawer();

            // Locate matching canvas node
            const targetNode = Array.from(
              document.querySelectorAll(".cursor-pointer, .parent-cursor-pointer")
            ).find((node) => getStepKey(node) === match.key);

            if (targetNode) {
              // Only apply flash outline animation — do NOT scroll canvas
              // (Canvas auto-scroll distorts the fixed layout)
              targetNode.classList.add("search-highlight-flash");
              setTimeout(() => {
                targetNode.classList.remove("search-highlight-flash");
              }, 2500);
            }

            // Close search dropdown
            searchDropdown.classList.add("hidden");
          });

          searchResults.appendChild(li);
        });
      } else {
        const noResults = document.createElement("div");
        noResults.className = "search-no-results";
        noResults.textContent = "No matches found.";
        searchResults.appendChild(noResults);
      }
    });
  }

  // ── Left Navigation Drawer Logic ──────────────────────────────────
  const leftGridBtn = document.getElementById("left-sidebar-grid-btn");
  const leftDrawer = document.getElementById("left-navigation-drawer");
  const leftCloseBtn = document.getElementById("left-drawer-close-btn");

  function openLeftDrawer() {
    console.log("openLeftDrawer called");
    if (leftDrawer) {
      leftDrawer.classList.add("show-left-drawer");
    }
  }

  function closeLeftDrawer() {
    console.log("closeLeftDrawer called");
    if (leftDrawer) {
      leftDrawer.classList.remove("show-left-drawer");
    }
  }

  if (leftGridBtn) {
    leftGridBtn.addEventListener("click", (e) => {
      console.log("leftGridBtn click event listener fired");
      e.stopPropagation();
      openLeftDrawer();
    });
  }

  if (leftCloseBtn) {
    leftCloseBtn.addEventListener("click", (e) => {
      console.log("leftCloseBtn click event listener fired");
      e.stopPropagation();
      closeLeftDrawer();
    });
  }

  // Prevent any accidental page-level scrolling (keeps main layout fixed)
  window.addEventListener("scroll", () => {
    if (window.scrollY !== 0 || window.scrollX !== 0) {
      window.scrollTo(0, 0);
    }
  });

  // ── Drawer Menu Search Filter Logic ──────────────────────────────
  const drawerSearchInputs = document.querySelectorAll(".drawer-search-input");
  drawerSearchInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase().trim();
      const drawer = e.target.closest("#left-navigation-drawer");
      if (!drawer) return;

      const menuGroups = drawer.querySelectorAll("div[style*='flex-direction: column'] > div");
      menuGroups.forEach(group => {
        const items = group.querySelectorAll(".drawer-menu-item");
        let visibleCount = 0;

        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(val)) {
            item.style.display = "flex";
            visibleCount++;
          } else {
            item.style.display = "none";
          }
        });

        if (items.length > 0) {
          group.style.display = visibleCount > 0 ? "block" : "none";
        }
      });
    });
  });
});

