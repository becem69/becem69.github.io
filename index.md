---
layout: default
---

<section class="hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="container hero-inner">
    <p class="hero-eyebrow">// {{ site.location }} - SYSTEM ONLINE</p>
    <h1 class="hero-title" data-glitch="BACEM EL MANAI">BACEM EL MANAI</h1>
    <p class="hero-role">
      <span class="type-target">Cybersecurity Developer</span>
    </p>
    <p class="hero-desc">
      I got into this field by breaking things apart to understand how they work, and stayed for the puzzle-solving.
      Reverse engineering binaries by night, shipping secure production systems by day.
      <span class="accent-cyan">Assume nothing. Verify everything.</span>
    </p>
    <div class="hero-actions">
      <a href="#projects" class="btn btn-primary">View Projects</a>
      <a href="/assets/Bacem_El_Manai_CV.pdf" class="btn btn-ghost" download>Download CV</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><span class="stat-num">7+</span><span class="stat-label">shipped projects</span></div>
      <div class="stat"><span class="stat-num">15+</span><span class="stat-label">pentests run</span></div>
      <div class="stat"><span class="stat-num">8</span><span class="stat-label">malware challenges cleared</span></div>
      <div class="stat"><span class="stat-num">2024</span><span class="stat-label">CTF player since</span></div>
    </div>
  </div>
</section>

<section id="projects" class="projects">
  <div class="container">
    <h2 class="section-title"><span class="section-tag">01</span>Projects</h2>
    <p class="section-sub">Selected builds, personal research, client work, and challenge design.</p>

    <div class="project-grid">
      {% assign sorted = site.projects | sort: "order" %}
      {% for project in sorted %}
      <a class="project-card {% if project.featured %}featured{% endif %}" href="{{ project.url | relative_url }}">
        <div class="card-head">
          <span class="perm-string">{{ project.perms | default: "rw-r--r--" }}</span>
          <span class="risk-badge risk-{{ project.risk | default: 'low' }}">{{ project.risk | default: "low" }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p class="card-tagline">{{ project.tagline }}</p>
        <p class="card-excerpt">{{ project.excerpt }}</p>
        <div class="card-foot">
          <div class="tags">
            {% for tag in project.stack limit:4 %}<span class="tag">{{ tag }}</span>{% endfor %}
          </div>
          <span class="card-arrow">&rarr;</span>
        </div>
      </a>
      {% endfor %}
    </div>

    <div class="more-repos">
      <p>More on GitHub, <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">github.com/{{ site.github_username }}</a></p>
    </div>
  </div>
</section>

<section id="experience" class="experience">
  <div class="container">
    <h2 class="section-title"><span class="section-tag">02</span>Experience</h2>
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-marker"></div>
        <div class="tl-content">
          <span class="tl-date">Feb 2026 - May 2026</span>
          <h3>Secure Software Developer <span class="tl-org">@ Zimys</span></h3>
          <p>Security-first architecture and threat modeling, MFA/RBAC systems, security code reviews, and pen testing before every production deployment.</p>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-marker"></div>
        <div class="tl-content">
          <span class="tl-date">Oct 2025 - Present</span>
          <h3>Web Developer <span class="tl-org">@ Engineers Spark</span></h3>
          <p>3+ production apps serving 500+ monthly active users. Flask/Python backends processing 10,000+ requests daily at 99.8% uptime. Cut vulnerabilities by 75% through security patches.</p>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-marker"></div>
        <div class="tl-content">
          <span class="tl-date">Jan 2026</span>
          <h3>Secure Software Development Intern <span class="tl-org">@ Zimys</span></h3>
          <p>Architected the MediCare Health Platform end-to-end, MFA, RBAC, zero critical vulnerabilities, 99.21% availability under DoS simulation.</p>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-marker"></div>
        <div class="tl-content">
          <span class="tl-date">Jun 2025 - Sep 2025</span>
          <h3>Web Developer (Freelance) <span class="tl-org">@ High Gloss Design</span></h3>
          <p>Kitchen Price Editor & Quote Generator, cut quotation prep time by 85%, blocked 15+ attempted brute-force breaches.</p>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-marker"></div>
        <div class="tl-content">
          <span class="tl-date">Jan 2025 - May 2025</span>
          <h3>Software Developer (Freelance) <span class="tl-org">@ Fatma Chimie</span></h3>
          <p>Secure inventory system for an industrial chemical company, 5,000+ monthly transactions, encrypted formula data, 45% fewer inventory errors.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="lab" class="lab">
  <div class="container">
    <h2 class="section-title"><span class="section-tag">03</span>The Lab</h2>
    <p class="section-sub">CTFs, malware analysis, and binary exploitation.</p>

    <div class="lab-grid">
      <div class="lab-card">
        <h3>Reverse Engineering &amp; Pwn</h3>
        <p>x86/x64 and ARM binary analysis with Ghidra, IDA Free, and radare2. Exploiting memory corruption: stack/heap overflows, ROP, format strings, use-after-free. Custom exploit scripts in Python and C.</p>
      </div>
      <div class="lab-card">
        <h3>Malware Analysis</h3>
        <p>8 challenges solved across TryHackMe, HackTheBox, and LetsDefend, static/dynamic analysis, obfuscation defeat, RAT behavioral analysis and SOC-style incident triage.</p>
      </div>
      <div class="lab-card">
        <h3>CTF Write-ups</h3>
        <ul class="lab-list">
          <li><a href="https://github.com/becem69/Ramadhan-CTF-cook-task-writeup" target="_blank" rel="noopener">cook.bin</a>, XOR-encoded flag recovered from a stripped PIE ELF via static analysis</li>
          <li><a href="https://github.com/becem69/Ramadhan-CTF-rev-this-sharp-challenge-writeup" target="_blank" rel="noopener">rev_this_#.bin</a>, hidden .NET assembly extracted from a self-contained ELF, XOR key recovered from metadata streams</li>
        </ul>
      </div>
      <div class="lab-card">
        <h3>Linux &amp; Pentesting</h3>
        <p>Kali Linux daily driver. 15+ small-business pentests, 20+ Bash hardening scripts, Metasploit-driven security testing, digital forensics.</p>
      </div>
    </div>
  </div>
</section>

<section id="certs" class="certs">
  <div class="container">
    <h2 class="section-title"><span class="section-tag">04</span>Certifications</h2>
    <div class="cert-row">
      <span class="cert-chip">Linux Foundation, OpenTofu (LFEL1009)</span>
      <span class="cert-chip">Linux Foundation, Cybersecurity Essentials (LFC108)</span>
      <span class="cert-chip">PentesterLab, Recon</span>
      <span class="cert-chip">TCM Security, Linux 100 &amp; Programming 100</span>
      <span class="cert-chip">Cisco, Intro to Cybersecurity</span>
      <span class="cert-chip">freeCodeCamp, Python Developer (300h)</span>
      <span class="cert-chip">freeCodeCamp, Responsive Web Design (300h)</span>
      <span class="cert-chip">Cybrary, OSINT</span>
    </div>
  </div>
</section>

<section id="contact" class="contact">
  <div class="container contact-inner">
    <h2 class="section-title"><span class="section-tag">05</span>Contact</h2>
    <p class="contact-lead">Open to secure software and security-engineering work.</p>
    <div class="contact-grid">
      <a href="mailto:{{ site.email }}" class="contact-card">
        <span class="contact-label">email</span>
        <span class="contact-value">{{ site.email }}</span>
      </a>
      <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener" class="contact-card">
        <span class="contact-label">github</span>
        <span class="contact-value">@{{ site.github_username }}</span>
      </a>
      <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener" class="contact-card">
        <span class="contact-label">linkedin</span>
        <span class="contact-value">bacem-el-manai</span>
      </a>
    </div>
  </div>
</section>
