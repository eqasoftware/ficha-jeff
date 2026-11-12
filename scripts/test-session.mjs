import assert from 'node:assert/strict';
import {
  calculateSessionStats,
  formatDuration,
  formatVolume,
  localDateKey
} from '../session-core.js';

const startedAt = new Date('2026-08-20T18:00:00-03:00').getTime();
const session = {
  startedAt,
  exercises: {
    supino: {
      sets: [
        { weight: '100', reps: '5', done: true },
        { weight: '102.5', reps: '4', done: true },
        { weight: '110', reps: '3', done: false }
      ]
    },
    remada: {
      sets: [{ weight: '80,5', reps: '8', done: true }]
    }
  }
};

const stats = calculateSessionStats(session, 8, startedAt + 5_400_000);
assert.deepEqual(stats, {
  completed: 3,
  total: 8,
  volume: 1554,
  duration: 5400,
  progress: 38
});
assert.equal(formatDuration(0), '00:00');
assert.equal(formatDuration(5400), '1:30:00');
assert.equal(formatVolume(1554), '1,6 t');
assert.equal(localDateKey(new Date(2026, 7, 20)), '2026-08-20');

console.log('✓ motor de sessão: progresso, volume, duração e data');
