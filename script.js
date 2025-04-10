function searchStudent() {
  const studentId = document.getElementById('studentIdInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (studentId === "12345") {
    resultDiv.innerHTML = \`
      <div class="info-box">
        <h3>الاسم: محمد أحمد</h3>
        <p>رقم الطالب: 12345</p>
      </div>
      <table>
        <thead>
          <tr><th>المادة</th><th>الدرجة</th><th>النهاية العظمى</th></tr>
        </thead>
        <tbody>
          <tr><td>اللغة العربية</td><td>45</td><td>50</td></tr>
          <tr><td>الرياضيات</td><td>38</td><td>50</td></tr>
          <tr><td>العلوم</td><td>39</td><td>50</td></tr>
          <tr><td>اللغة الإنجليزية</td><td>41</td><td>50</td></tr>
          <tr><td>الدراسات الاجتماعية</td><td>40</td><td>50</td></tr>
          <tr><td>الحاسب الآلي</td><td>48</td><td>50</td></tr>
        </tbody>
      </table>
      <div class="info-box">
        <p>المجموع: 251 / 300</p>
        <p>النسبة المئوية: 83.67%</p>
      </div>
      <button class="print-btn" onclick="window.print()">طباعة النتيجة</button>
      <br>
      <button onclick="location.reload()">بحث جديد</button>
    \`;
    document.getElementById("searchSection").style.display = "none";
  } else {
    resultDiv.innerHTML = \`<p style="color:red">الطالب غير موجود.</p>\`;
  }
}