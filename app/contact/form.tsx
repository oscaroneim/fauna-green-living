// export default function Contact() {
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const response = await fetch('ADD API LINK', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//       },
//       body: json
//     });
//     const result = await response.json();
//     if (result.success) {
//       console.log(result);
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="First Name" />
//         <input type="text" name="last name" />
//         <input type="email" name="Email address" />
//         <textarea name="Your message"></textarea>
//         <button type="submit">Submit Form</button>
//       </form>
//     </>
//   );
// }

export default async function ContactForm() {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdyyQRRux5aNGdobDQW-eU2WSPutD4tWUzyops8tq-F_H5KGA/viewform?embedded=true"
      width="640"
      height="959"
    >
      Loading…
    </iframe>
  );
}
