import os

# Folder path where HTML files are located
folder_path = r"C:\Users\bhavy\OneDrive\Desktop\website"

# Your replacement HTML code between the two markers
my_code = """
    <section
      data-bs-version="5.1"
      class="menu menu2 cid-uJSrOkOEyE"
      once="menu"
      id="menu-5-uJSrOkOEyE"
    >
      <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-logo">
              <a href="index.html">
                <img
                  src="web_files/photo-1732881112067-aa3e9ece2-h_ma49wziz.jpg"
                  alt=""
                  style="height: 4.3rem"
                />
              </a>
            </span>
            <span class="navbar-caption-wrap">
              <a
                class="navbar-caption text-black display-4"
                href="index.html"
                autocomplete="off"
              >
                Home
              </a>
            </span>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li class="nav-item">
                <a
                  class="nav-link link text-black display-4"
                  href="people.html"
                >
                  People
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link link text-black display-4"
                  href="research.html"
                  aria-expanded="false"
                >
                  Research
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link link text-black display-4"
                  href="publications.html"
                  aria-expanded="false"
                  autocomplete="off"
                >
                  Publications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link text-black display-4" href="blog.html">
                  Blog
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-black display-4"
                  href="#"
                  id="openScienceDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Open Science
                </a>
                <div class="dropdown-menu" aria-labelledby="openScienceDropdown">
                  <a class="dropdown-item" href="registrations.html">Registrations</a>
                  <a class="dropdown-item" href="registered-reports.html">Registered Reports</a>
                  <a class="dropdown-item" href="published-protocols.html">Published Protocols</a>
                  <a class="dropdown-item" href="EDI.html">Equity, Diversity and Inclusion</a>
                  <a class="dropdown-item" href="others.html">Others</a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link link text-black display-4"
                  href="opportunities.html"
                  autocomplete="off"
                >
                  Opportunities
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link link text-black display-4"
                  href="links.html"
                  autocomplete="off"
                >
                  Links
                </a>
              </li>
            </ul>

            <div class="navbar-buttons mbr-section-btn">
              <a
                class="btn btn-primary display-4 glow-animation"
                href="contact.html"
                autocomplete="off"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
"""

# Loop through all files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".html"):
        file_path = os.path.join(folder_path, filename)
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        new_lines = []
        inside_section = False
        for line in lines:
            if "<!-- NAV BAR -->" in line:
                new_lines.append(line)
                new_lines.append(my_code + '\n')
                inside_section = True
                continue
            if "<!-- PAGE CONTENT -->" in line:
                inside_section = False
                new_lines.append(line)
                continue
            if not inside_section:
                new_lines.append(line)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.writelines(new_lines)

print("All HTML files updated successfully.")
