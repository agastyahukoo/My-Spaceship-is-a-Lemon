document.getElementById('settings-button').addEventListener('click', function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('settings').style.display = 'block';
});

document.getElementById('save-settings').addEventListener('click', function() {
    // Here you would save the settings, for example, to local storage
    var volume = document.getElementById('volume').value;
    var protagonist = document.getElementById('protagonist').value;
    var username = document.getElementById('username').value;

    // Example: Save to local storage
    localStorage.setItem('volume', volume);
    localStorage.setItem('protagonist', protagonist);
    localStorage.setItem('username', username);

    // Hide settings and show loading screen again
    document.getElementById('settings').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'block';
});
