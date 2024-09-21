export function getStarPercentages(rating: number, totalStars = 5) {
  const percentages = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      percentages.push(100);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // Partial star
      const partial = (rating % 1) * 100;
      percentages.push(Math.round(partial));
    } else {
      // Empty star
      percentages.push(0);
    }
  }

  return percentages;
}

export function truncateDescription(
  description: string,
  maxLength: number = 200
) {
  if (description.length <= maxLength) {
    return description; // No need to truncate if it's short enough
  }

  // Find the last space within the maxLength to avoid cutting off a word
  let truncated = description.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > 0) {
    truncated = truncated.slice(0, lastSpace); // Cut off at the last space
  }

  return truncated + " ..."; // Add ellipses to indicate truncation
}

export function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
