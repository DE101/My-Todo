export default function Settings() {
  return (
    <div className="settingsContainer">
      <h1>Settings</h1>
      <div className="displaySettings">
        <h3>Display</h3>
        <p>Wallpaper</p>
        <p>Font size</p>
      </div>
      <div className="ThemeSettings">
        <h3>Theme</h3>
        <p>Dark</p>
        <p>Light</p>
      </div>
      <div className="notificationSettings">
        <h3>Notifications</h3>
        <p>alert sound</p>
        <p>pop up</p>
        <p>Volume</p>
        <p>Ring time duration</p>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>Wallpaper</p>
        <p>Font size</p>
      </div>
      <div className="help">
        <h3>Help Us</h3>
        <p>Rate Us</p>
        <p>Send us Feedback</p>
      </div>
    </div>
  );
}
