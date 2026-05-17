import qrcode from "qrcode-terminal";

export default function createQRCode(
  link: string,
  type: string,
): Promise<string> {
  const isSmall = type === "1";

  return new Promise((resolve) => {
    qrcode.generate(link, { small: isSmall }, (qr) => {
      resolve(qr);
    });
  });
}
