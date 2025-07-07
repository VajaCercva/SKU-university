const apiKey = '264b1bf44bd6062e566516431a85b896';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message || "API error");
          });
        }
        return response.json();
      })
      .then(data => {
        document.getElementById("weather").innerHTML = `
          <p><strong>ტემპერატურა:</strong> ${data.main.temp}°C</p>
          <p><strong>მდგომარეობა:</strong> ${data.weather[0].description}</p>
          <p><strong>ტენიანობა:</strong> ${data.main.humidity}%</p>
          <p><strong>ქარი:</strong> ${data.wind.speed} მ/წ</p>
        `;
      })
      .catch(error => {
        document.getElementById("weather").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        console.error("Fetch error:", error);
      });


document.getElementById('registerForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const username = this.username.value.trim();
      const email = this.email.value.trim();
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      alert(`Registered!\nUsername: ${username}\nEmail: ${email}`);
      
      this.reset();
    });