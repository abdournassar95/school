const students = [
  { "رقم الطالب": "1", "الاسم": "محمد أحمد", "عربي": 2, "رياضيات": 38, "علوم": 12, "دراسات": 25, "إنجليزي": 20, "حاسب": 40 },
  { "رقم الطالب": "2", "الاسم": "أحمد مصطفى", "عربي": 38, "رياضيات": 36, "علوم": 34, "دراسات": 33, "إنجليزي": 37, "حاسب": 39 },
  { "رقم الطالب": "3", "الاسم": "يوسف محمد", "عربي": 36, "رياضيات": 35, "علوم": 37, "دراسات": 34, "إنجليزي": 36, "حاسب": 35 },
  { "رقم الطالب": "4", "الاسم": "عمرو خالد", "عربي": 37, "رياضيات": 37, "علوم": 36, "دراسات": 36, "إنجليزي": 38, "حاسب": 38 },
  { "رقم الطالب": "5", "الاسم": "سعيد محمود", "عربي": 35, "رياضيات": 33, "علوم": 32, "دراسات": 30, "إنجليزي": 31, "حاسب": 34 },
];
const maxScores = { "عربي": 40, "رياضيات": 40, "علوم": 40, "دراسات": 40, "إنجليزي": 40, "حاسب": 40 };

function getGradeClass(score, max) {
  const ratio = score / max;
  if (ratio >= 0.85) return 'grade-high';
  if (ratio >= 0.6) return 'grade-mid';
  return 'grade-low';
}

function searchStudent() {
  const studentId = document.getElementById('studentIdInput').value.trim();
  const student = students.find(s => s["رقم الطالب"] === studentId);
  const resultDiv = document.getElementById('result');
  const searchArea = document.getElementById('searchArea');

  if (!student) {
    resultDiv.innerHTML = '<p style="color:red">الطالب غير موجود.</p>';
    resultDiv.style.display = 'block';
    return;
  }

  let total = 0;
  let maxTotal = 0;
  let rows = '';

  for (const subject in maxScores) {
    const score = student[subject] || 0;
    const max = maxScores[subject];
    total += score;
    maxTotal += max;
    const gradeClass = getGradeClass(score, max);
    rows += `<tr><td>${subject}</td><td class="${gradeClass}">${score}</td><td>${max}</td></tr>`;
  }

  const percentage = ((total / maxTotal) * 100).toFixed(2);

  resultDiv.innerHTML = `
    <div class="info-box">
      <p><strong>رقم الطالب:</strong> ${student["رقم الطالب"]}</p>
      <p><strong>الاسم:</strong> ${student["الاسم"]}</p>
    </div>
    <table>
      <thead>
        <tr><th>المادة</th><th>الدرجة</th><th>النهاية العظمى</th></tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
    <div class="info-box">
      <p><strong>المجموع:</strong> ${total} من ${maxTotal}</p>
      <p><strong>النسبة المئوية:</strong> ${percentage}%</p>
    </div>
    <div class="button-group">
      <button onclick="location.reload()">بحث جديد</button>
      <button onclick="window.print()">طباعة النتيجة</button>
    </div>
  `;
  resultDiv.style.display = 'block';
  searchArea.style.display = 'none';
}