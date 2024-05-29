// Tiktok social media widget from Sociablekit

export async function Tiktok() {
  return (
    // makes the widget slightly less than the entire background
    <div className="w-[97%]">
      <div className="sk-tiktok-feed" data-embed-id="25413609"></div>
      <script src="https://widgets.sociablekit.com/tiktok-feed/widget.js" async defer></script>
    </div>
  );
}
