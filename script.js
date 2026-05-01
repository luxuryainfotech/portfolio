 function submitForm() {
      const n = document.getElementById('f-name').value.trim();
      const e = document.getElementById('f-email').value.trim();
      const s = document.getElementById('f-service').value;
      if (!n || !e || !s) { alert('Please fill in your name, email, and service required.'); return; }
      document.getElementById('success-msg').style.display = 'block';
      document.getElementById('f-name').value = '';
      document.getElementById('f-email').value = '';
      document.getElementById('f-service').value = '';
      document.getElementById('f-budget').value = '';
      document.getElementById('f-msg').value = '';
    }