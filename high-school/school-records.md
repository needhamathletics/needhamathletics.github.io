---
layout: base
wide: true
---

# School Records
{: .center-text}

## Top 10 Cross Country Runners
{: .center-text}

{% assign girls-top-10 = site.data.school-records.cross-country.girls-top-10 %}
{% assign boys-top-10 = site.data.school-records.cross-country.boys-top-10 %}
<div class="overflow-x-auto">
  <table class="no-head">
    <tbody>
      {% for i in (0..9) %}
        {% assign girls-record = girls-top-10[i] %}
        {% assign boys-record = boys-top-10[i] %}
        <tr>
          <td>{{ girls-record.name }}</td>
          <td>{{ girls-record.result }}</td>
          <td>{{ girls-record.date }}</td>
          <td style="text-align:center;"><strong>{{ i | plus: 1 }}</strong></td>
          <td>{{ boys-record.name }}</td>
          <td>{{ boys-record.result }}</td>
          <td>{{ boys-record.date }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Indoor Track & Field
{: .center-text}

{% assign events = site.data.school-records.indoor-track-and-field.events %}
{% assign girls-records = site.data.school-records.indoor-track-and-field.girls %}
{% assign boys-records = site.data.school-records.indoor-track-and-field.boys %}
{% include record-board.html
  events=events
  girls-records=girls-records
  boys-records=boys-records %}

## Outdoor Track & Field
{: .center-text}

{% assign events = site.data.school-records.outdoor-track-and-field.events %}
{% assign girls-records = site.data.school-records.outdoor-track-and-field.girls %}
{% assign boys-records = site.data.school-records.outdoor-track-and-field.boys %}
{% include record-board.html
  events=events
  girls-records=girls-records
  boys-records=boys-records %}

## Swimming & Diving
{: .center-text}

{% assign events = site.data.school-records.swimming-and-diving.events %}
{% assign girls-records = site.data.school-records.swimming-and-diving.girls %}
{% assign boys-records = site.data.school-records.swimming-and-diving.boys %}
{% include record-board.html
  events=events
  girls-records=girls-records
  boys-records=boys-records %}
