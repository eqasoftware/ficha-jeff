export function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Math.floor(totalSeconds || 0));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export function formatVolume(value) {
  const volume = Math.round(value || 0);
  if (volume >= 1000) return `${(volume / 1000).toFixed(1).replace('.', ',')} t`;
  return `${volume} kg`;
}

export function calculateSessionStats(session, total, now = Date.now()) {
  if (!session) return { completed: 0, total: 0, volume: 0, duration: 0, progress: 0 };

  const logs = Object.values(session.exercises || {});
  const completed = logs.reduce(
    (sum, exercise) => sum + exercise.sets.filter(set => set.done).length,
    0
  );
  const volume = logs.reduce((totalVolume, exercise) => {
    return totalVolume + exercise.sets.reduce((setVolume, set) => {
      if (!set.done) return setVolume;
      const weight = Number.parseFloat(String(set.weight).replace(',', '.')) || 0;
      const reps = Number.parseInt(set.reps, 10) || 0;
      return setVolume + (weight * reps);
    }, 0);
  }, 0);
  const end = session.finishedAt || now;
  const duration = Math.max(0, Math.floor((end - session.startedAt) / 1000));

  return {
    completed,
    total,
    volume,
    duration,
    progress: total ? Math.round((completed / total) * 100) : 0
  };
}
