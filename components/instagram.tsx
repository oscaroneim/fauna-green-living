// Instagram social media widget from Sociablekit

export async function Instagram() {
  return (
    // makes the widget slightly less than the entire background
    <div className="w-[97%]">
      <div className="sk-instagram-feed border-b" data-embed-id="25411702"></div>
      <script src="https://widgets.sociablekit.com/instagram-feed/widget.js" async defer></script>
    </div>
  );
}
