---
layout: base
wide: true
css:
  - championship-titles.css
---

# Championship Titles
{: .center-text}

<div class="titles">
  {% for title-sport in site.data.titles %}
    {% assign sport = site.data.sports[title-sport.key] %}
    <div class="sport">
      <h2>{{ sport.title }}</h2>
      <h3>Conference</h3>
      <div class="years">
        {% for year in title-sport.conference %}
          <div class="year">{{ year }}</div>
        {% endfor %}
      </div>
      <h3>Sectional</h3>
      <div class="years">
        {% for year in title-sport.sectional %}
          <div class="year">{{ year }}</div>
        {% endfor %}
      </div>
      <h3>State</h3>
      <div class="years">
        {% for year in title-sport.state %}
          <div class="year">{{ year }}</div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>
