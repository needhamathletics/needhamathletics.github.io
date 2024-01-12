---
layout: base
wide: true
---

# School Records
{: .center-text}

## Swim and Dive
{: .center-text}

{% assign events = site.data.records.swim-and-dive-events %}
{% assign girls-records = site.data.records.girls-swim-and-dive %}
{% assign boys-records = site.data.records.boys-swim-and-dive %}
<div class="overflow-x-auto">
  <table class="no-head">
    <tbody>
      {% for event in events %}
        {% assign girls-record = girls-records | where: "event", event | first %}
        {% assign boys-record = boys-records | where: "event", event | first %}
        <tr>
          <td>{{ girls-record.name | replace: ";", ",<br>" }}</td>
          <td>{{ girls-record.result }}</td>
          <td>{{ girls-record.date }}</td>
          <td style="text-align:center;"><strong>{{ event }}</strong></td>
          <td>{{ boys-record.name | replace: ";", "<br>" }}</td>
          <td>{{ boys-record.result }}</td>
          <td>{{ boys-record.date }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
