export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export function getRedirectUrl(url: string): string {
  try {
    const urlObject = new URL(url);
    // Check if the URL is external (not our domain)
    if (urlObject.host !== window.location.host) {
      // Return the redirect path
      return `/go/external?url=${encodeURIComponent(url)}`;
    }
  } catch (e) {
    // If URL parsing fails, return the original URL
    console.warn('Invalid URL:', url);
  }
  return url;
}
