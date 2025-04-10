function searchStudent() {
  const studentsData = {
      "10001": { name: "أحمد محمد", scores: { "اللغة العربية": 49, "الرياضيات": 49, "العلوم": 49, "اللغة الإنجليزية": 49, "الدراسات الاجتماعية": 49, "الحاسب الآلي": 49 } },
      "10002": { name: "محمود علي", scores: { "اللغة العربية": 48, "الرياضيات": 48, "العلوم": 48, "اللغة الإنجليزية": 48, "الدراسات الاجتماعية": 48, "الحاسب الآلي": 48 } },
      "10003": { name: "يوسف حسن", scores: { "اللغة العربية": 47, "الرياضيات": 47, "العلوم": 47, "اللغة الإنجليزية": 47, "الدراسات الاجتماعية": 47, "الحاسب الآلي": 47 } },
      "10004": { name: "كريم أحمد", scores: { "اللغة العربية": 46, "الرياضيات": 46, "العلوم": 46, "اللغة الإنجليزية": 46, "الدراسات الاجتماعية": 46, "الحاسب الآلي": 46 } },
      "10005": { name: "عبدالله محمود", scores: { "اللغة العربية": 45, "الرياضيات": 45, "العلوم": 45, "اللغة الإنجليزية": 45, "الدراسات الاجتماعية": 45, "الحاسب الآلي": 45 } },
      "10006": { name: "عمر جمال", scores: { "اللغة العربية": 44, "الرياضيات": 44, "العلوم": 44, "اللغة الإنجليزية": 44, "الدراسات الاجتماعية": 44, "الحاسب الآلي": 44 } },
      "10007": { name: "محمد ياسين", scores: { "اللغة العربية": 43, "الرياضيات": 43, "العلوم": 43, "اللغة الإنجليزية": 43, "الدراسات الاجتماعية": 43, "الحاسب الآلي": 43 } },
      "10008": { name: "سيف الدين", scores: { "اللغة العربية": 42, "الرياضيات": 42, "العلوم": 42, "اللغة الإنجليزية": 42, "الدراسات الاجتماعية": 42, "الحاسب الآلي": 42 } },
      "10009": { name: "خالد عمرو", scores: { "اللغة العربية": 41, "الرياضيات": 41, "العلوم": 41, "اللغة الإنجليزية": 41, "الدراسات الاجتماعية": 41, "الحاسب الآلي": 41 } },
      "10010": { name: "زياد إبراهيم", scores: { "اللغة العربية": 40, "الرياضيات": 40, "العلوم": 40, "اللغة الإنجليزية": 40, "الدراسات الاجتماعية": 40, "الحاسب الآلي": 40 } }
    };

    function searchStudent() {
      const studentId = document.getElementById('studentIdInput').value.trim();
      const resultDiv = document.getElementById('result');
      const student = studentsData[studentId];

      if (student) {
        let total = 0;
        const max = 50 * 6;
        let tableRows = "";
        for (const [subject, mark] of Object.entries(student.scores)) {
          tableRows += `<tr><td>${subject}</td><td>${mark}</td><td>50</td></tr>`;
          total += parseFloat(mark);
        }
        const percentage = ((total / max) * 100).toFixed(2);

        resultDiv.innerHTML = `
          <div class="info-box">
            <h3>الاسم: ${student.name}</h3>
            <p>رقم الطالب: ${studentId}</p>
          </div>
          <table>
            <thead>
              <tr><th>المادة</th><th>الدرجة</th><th>النهاية العظمى</th></tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
          <div class="info-box">
            <p>المجموع: ${total} / ${max}</p>
            <p>النسبة المئوية: ${percentage}%</p>
          </div>
          <button class="print-btn" onclick="window.print()">طباعة النتيجة</button>
          <br>
          <button onclick="location.reload()">بحث جديد</button>
        `;

        document.getElementById("searchSection").style.display = "none";
      } else {
        resultDiv.innerHTML = `<p style="color:red">الطالب غير موجود.</p>`;
      }
    }
  </script>

</body>
</html>
