import { EXERCISES } from './exercises.js';
import {
  calculateSessionStats,
  formatDuration,
  formatVolume,
  localDateKey
} from './session-core.js';

document.addEventListener("DOMContentLoaded", () => {
          const el = document.getElementById("typing-dev");
          const caret = document.querySelector(".typing-caret");
          const container = document.querySelector(".dev-text");

          const text = "Construindo o corpo como código — disciplina é o deploy diário";

          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.textContent = `${text} ⚡`;
            caret.style.display = "none";
            return;
          }

          let i = 0;

          function type() {
            if (i < text.length) {
              el.textContent += text.charAt(i);
              i++;
              setTimeout(type, 28);
            } else {
              el.textContent += " ⚡";
              container.classList.add("glow-final");
              caret.style.display = "none";
            }
          }

          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                type();
                observer.disconnect();
              }
            });
          }, { threshold: 0.6 });

          observer.observe(container);
        });

const tabs = document.querySelectorAll('.day-tab');
    const panels = document.querySelectorAll('.day-panel');
    const validDays = new Set([...tabs].map(tab => tab.dataset.day));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showDay(id, { scroll = true, updateUrl = true } = {}) {
      const targetPanel = document.getElementById(id);
      const targetTab = document.querySelector(`.day-tab[data-day="${id}"]`);

      if (!targetPanel || !targetTab) return;

      panels.forEach(panel => {
        const isActive = panel === targetPanel;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });

      tabs.forEach(tab => {
        const isActive = tab === targetTab;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });

      if (updateUrl && window.location.hash !== `#${id}`) {
        const url = new URL(window.location.href);
        url.hash = id;
        window.history.pushState({ day: id }, '', url);
      }

      if (scroll) {
        const content = document.querySelector('.content');
        window.scrollTo({
          top: content.offsetTop - 90,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }

      observeReveals(targetPanel);
      resetFinishConfirmation();
      refreshSessionUi();
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => showDay(tab.dataset.day));

      tab.addEventListener('keydown', event => {
        const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (!keys.includes(event.key)) return;

        event.preventDefault();
        const currentIndex = [...tabs].indexOf(tab);
        const nextIndex = event.key === 'Home' ? 0
          : event.key === 'End' ? tabs.length - 1
            : event.key === 'ArrowRight' ? (currentIndex + 1) % tabs.length
              : (currentIndex - 1 + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];

        nextTab.focus();
        nextTab.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        showDay(nextTab.dataset.day);
      });
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    function observeReveals(scope = document) {
      scope.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    observeReveals();

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        if (!target || el.dataset.animated === 'true') return;

        el.dataset.animated = 'true';
        let current = 0;
        const duration = 900;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          current = Math.floor(progress * target);
          el.textContent = current;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }

        requestAnimationFrame(tick);
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('[data-target]').forEach(el => statObserver.observe(el));

    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion) {
      const hero = document.querySelector('.hero');

      document.addEventListener('mousemove', event => {
        const rect = hero.getBoundingClientRect();
        const isNearHero = event.clientY < rect.bottom + 80;

        if (!isNearHero) {
          hero.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
          return;
        }

        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
        hero.style.transform = `translateY(0) rotateX(${(-y).toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
      });

      document.addEventListener('mouseleave', () => {
        hero.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
      });
    }

    // ===========================
    // EXERCISE MODAL
    // ===========================
    // ===========================
    // TRAINING SESSION ENGINE
    // ===========================
    const STORAGE_KEY = 'ficha-jeff-state-v1';
    const dayByWeekday = ['fds', 'seg', 'ter', 'qua', 'qui', 'sex', 'fds'];
    const trainingConsole = document.querySelector('.training-console');
    const sessionEyebrow = document.getElementById('sessionEyebrow');
    const sessionTitle = document.getElementById('sessionTitle');
    const sessionCopy = document.getElementById('sessionCopy');
    const sessionToggle = document.getElementById('sessionToggle');
    const historyOpen = document.getElementById('historyOpen');
    const historyCount = document.getElementById('historyCount');
    const progressOrbit = document.getElementById('progressOrbit');
    const sessionProgress = document.getElementById('sessionProgress');
    const completedSets = document.getElementById('completedSets');
    const sessionVolume = document.getElementById('sessionVolume');
    const sessionDuration = document.getElementById('sessionDuration');
    const totalSessions = document.getElementById('totalSessions');
    const historyOverlay = document.getElementById('historyOverlay');
    const historyClose = document.getElementById('historyClose');
    const historySummary = document.getElementById('historySummary');
    const historyList = document.getElementById('historyList');
    const restTimer = document.getElementById('restTimer');
    const restTimerValue = document.getElementById('restTimerValue');
    const restMinus = document.getElementById('restMinus');
    const restSkip = document.getElementById('restSkip');
    const restPlus = document.getElementById('restPlus');
    const appToast = document.getElementById('appToast');
    const exLogSection = document.getElementById('exLogSection');
    const exLogCopy = document.getElementById('exLogCopy');
    const exLogProgress = document.getElementById('exLogProgress');
    const exSetLog = document.getElementById('exSetLog');
    const previousPerformance = document.getElementById('previousPerformance');

    let trainingState = loadTrainingState();
    let currentExerciseMeta = null;
    let restTimerInterval = null;
    let toastTimeout = null;
    let finishConfirmTimeout = null;
    let historyLastFocus = null;

    function loadTrainingState() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return {
          version: 1,
          activeSession: saved?.activeSession || null,
          history: Array.isArray(saved?.history) ? saved.history : []
        };
      } catch {
        return { version: 1, activeSession: null, history: [] };
      }
    }

    function saveTrainingState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(trainingState));
      } catch {
        showToast('Não foi possível salvar neste dispositivo.');
      }
    }

    function getExerciseName(exerciseEl) {
      const nameEl = exerciseEl.querySelector('.ex-name');
      if (!nameEl) return '';

      return [...nameEl.childNodes]
        .filter(node => node.nodeType === Node.TEXT_NODE)
        .map(node => node.textContent.trim())
        .join(' ')
        .trim();
    }

    function slugify(value) {
      return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    function formatDate(timestamp) {
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(new Date(timestamp));
    }

    function getWorkoutName(day) {
      return document.querySelector(`#${day} .day-title`)?.textContent.replace(/\s+/g, ' ').trim()
        || (day === 'fds' ? 'Descanso total' : 'Treino');
    }

    function getSelectedDay() {
      return document.querySelector('.day-tab[aria-selected="true"]')?.dataset.day || 'seg';
    }

    function getExerciseMeta(exerciseEl) {
      const panel = exerciseEl.closest('.day-panel');
      const name = getExerciseName(exerciseEl);
      const setCount = Number.parseInt(exerciseEl.querySelector('.ex-sets')?.textContent, 10) || 0;
      const targetReps = exerciseEl.querySelector('.ex-reps')?.textContent.trim() || '';
      const day = panel?.id || getSelectedDay();

      return {
        id: `${day}-${slugify(name)}`,
        day,
        name,
        setCount,
        targetReps,
        element: exerciseEl
      };
    }

    function getDayExercises(day) {
      return [...document.querySelectorAll(`#${day} .exercise`)].map(getExerciseMeta);
    }

    function prepareExerciseRows() {
      document.querySelectorAll('.exercise').forEach(exerciseEl => {
        const meta = getExerciseMeta(exerciseEl);
        exerciseEl.dataset.exerciseId = meta.id;

        if (!exerciseEl.querySelector('.ex-session-progress')) {
          const progress = document.createElement('span');
          progress.className = 'ex-session-progress';
          progress.setAttribute('aria-hidden', 'true');
          progress.textContent = `0/${meta.setCount}`;
          exerciseEl.append(progress);
        }
      });
    }

    function createSession(day) {
      if (day === 'fds') {
        showToast('Hoje o plano é recuperar. Escolha um treino da semana se precisar.');
        return null;
      }

      if (trainingState.activeSession) return trainingState.activeSession;

      trainingState.activeSession = {
        id: globalThis.crypto?.randomUUID?.() || `session-${Date.now()}`,
        day,
        date: localDateKey(),
        startedAt: Date.now(),
        restEndsAt: null,
        exercises: {}
      };
      saveTrainingState();
      resetFinishConfirmation();
      refreshSessionUi();
      showToast(`${getWorkoutName(day)} iniciado.`);
      return trainingState.activeSession;
    }

    function ensureSession(day) {
      const active = trainingState.activeSession;
      if (active && active.day !== day) {
        showToast(`Finalize ${getWorkoutName(active.day)} antes de registrar outro treino.`);
        return null;
      }
      return active || createSession(day);
    }

    function getExerciseLog(session, meta, create = false) {
      if (!session) return null;
      let log = session.exercises[meta.id];

      if (!log && create) {
        log = {
          id: meta.id,
          name: meta.name,
          targetReps: meta.targetReps,
          sets: Array.from({ length: meta.setCount }, () => ({ weight: '', reps: '', done: false }))
        };
        session.exercises[meta.id] = log;
      }

      if (log && log.sets.length < meta.setCount) {
        log.sets.push(...Array.from(
          { length: meta.setCount - log.sets.length },
          () => ({ weight: '', reps: '', done: false })
        ));
      }

      return log;
    }

    function getSessionStats(session) {
      if (!session) return calculateSessionStats(null, 0);
      const total = getDayExercises(session.day).reduce((sum, exercise) => sum + exercise.setCount, 0);
      return calculateSessionStats(session, total);
    }

    function refreshExerciseRows() {
      const active = trainingState.activeSession;

      document.querySelectorAll('.exercise').forEach(exerciseEl => {
        const meta = getExerciseMeta(exerciseEl);
        const log = active?.day === meta.day ? getExerciseLog(active, meta) : null;
        const done = log?.sets.filter(set => set.done).length || 0;
        const progress = exerciseEl.querySelector('.ex-session-progress');

        progress.textContent = `${done}/${meta.setCount}`;
        exerciseEl.classList.toggle('has-progress', done > 0);
        exerciseEl.classList.toggle('completed', done === meta.setCount && meta.setCount > 0);
      });
    }

    function refreshSessionUi() {
      const selectedDay = getSelectedDay();
      const active = trainingState.activeSession;
      const selectedTotal = getDayExercises(selectedDay).reduce((sum, exercise) => sum + exercise.setCount, 0);
      const stats = active ? getSessionStats(active) : {
        completed: 0,
        total: selectedTotal,
        volume: 0,
        duration: 0,
        progress: 0
      };

      trainingConsole.classList.toggle('is-active', Boolean(active));
      progressOrbit.style.setProperty('--progress', stats.progress);
      sessionProgress.textContent = `${stats.progress}%`;
      completedSets.textContent = `${stats.completed}/${stats.total}`;
      sessionVolume.textContent = formatVolume(stats.volume);
      sessionDuration.textContent = formatDuration(stats.duration);
      totalSessions.textContent = trainingState.history.length;
      historyCount.textContent = trainingState.history.length;

      sessionToggle.disabled = selectedDay === 'fds' && !active;

      if (!active) {
        sessionEyebrow.textContent = selectedDay === 'fds' ? 'Recuperação programada' : 'Pronto para treinar';
        sessionTitle.textContent = getWorkoutName(selectedDay);
        sessionCopy.textContent = selectedDay === 'fds'
          ? 'Sono, alimentação e mobilidade leve também constroem performance.'
          : `Registre as ${selectedTotal} séries e acompanhe sua evolução em tempo real.`;
        sessionToggle.textContent = selectedDay === 'fds' ? 'Dia de descanso' : 'Iniciar treino';
      } else if (active.day !== selectedDay) {
        sessionEyebrow.textContent = 'Sessão ativa em outro treino';
        sessionTitle.textContent = getWorkoutName(active.day);
        sessionCopy.textContent = `Você está consultando ${getWorkoutName(selectedDay)}. Volte para continuar a sessão ativa.`;
        sessionToggle.disabled = false;
        sessionToggle.textContent = 'Voltar ao treino ativo';
      } else {
        const remaining = Math.max(0, stats.total - stats.completed);
        sessionEyebrow.textContent = stats.progress === 100 ? 'Treino completo' : 'Sessão em andamento';
        sessionTitle.textContent = getWorkoutName(active.day);
        sessionCopy.textContent = stats.progress === 100
          ? 'Todas as séries foram registradas. Excelente trabalho.'
          : `${remaining} ${remaining === 1 ? 'série restante' : 'séries restantes'} para concluir a sessão.`;
        sessionToggle.textContent = stats.progress === 100 ? 'Concluir treino' : 'Finalizar treino';
      }

      refreshExerciseRows();
      updateOpenLoggerProgress();
    }

    function resetFinishConfirmation() {
      window.clearTimeout(finishConfirmTimeout);
      finishConfirmTimeout = null;
      sessionToggle.classList.remove('confirming');
      sessionToggle.dataset.confirming = 'false';
    }

    function finishSession() {
      const session = trainingState.activeSession;
      if (!session) return;

      const stats = getSessionStats(session);
      const finished = {
        ...session,
        finishedAt: Date.now(),
        restEndsAt: null,
        completedSets: stats.completed,
        expectedSets: stats.total,
        volume: stats.volume,
        durationSeconds: stats.duration
      };

      trainingState.history.unshift(finished);
      trainingState.history = trainingState.history.slice(0, 60);
      trainingState.activeSession = null;
      stopRestTimer();
      resetFinishConfirmation();
      saveTrainingState();
      refreshSessionUi();
      showToast(`Treino salvo: ${stats.completed} séries e ${formatVolume(stats.volume)}.`);
    }

    function handleSessionToggle() {
      const selectedDay = getSelectedDay();
      const active = trainingState.activeSession;

      if (!active) {
        createSession(selectedDay);
        return;
      }

      if (active.day !== selectedDay) {
        showDay(active.day);
        return;
      }

      if (sessionToggle.dataset.confirming !== 'true') {
        sessionToggle.dataset.confirming = 'true';
        sessionToggle.classList.add('confirming');
        sessionToggle.textContent = 'Confirmar finalização';
        finishConfirmTimeout = window.setTimeout(() => {
          resetFinishConfirmation();
          refreshSessionUi();
        }, 4000);
        return;
      }

      finishSession();
    }

    function findPreviousPerformance(meta) {
      return trainingState.history.find(session => session.day === meta.day && session.exercises?.[meta.id]);
    }

    function renderExerciseLogger(exerciseEl) {
      const meta = getExerciseMeta(exerciseEl);
      const active = trainingState.activeSession;
      const isLocked = Boolean(active && active.day !== meta.day);
      const log = active?.day === meta.day ? getExerciseLog(active, meta) : null;
      const previous = findPreviousPerformance(meta);

      currentExerciseMeta = meta;
      exSetLog.replaceChildren();
      exLogSection.classList.toggle('is-locked', isLocked);
      exLogCopy.textContent = isLocked
        ? `Finalize ${getWorkoutName(active.day)} para registrar este exercício.`
        : active
          ? 'Carga, repetições e conclusão de cada série.'
          : 'O primeiro registro inicia este treino automaticamente.';

      if (previous) {
        const previousSets = previous.exercises[meta.id].sets
          .filter(set => set.done)
          .map(set => `${set.weight || '—'} kg × ${set.reps || '—'}`)
          .join(' · ');
        previousPerformance.hidden = false;
        previousPerformance.textContent = previousSets
          ? `Último treino: ${previousSets}`
          : `Último registro em ${formatDate(previous.finishedAt || previous.startedAt)}.`;
      } else {
        previousPerformance.hidden = true;
        previousPerformance.textContent = '';
      }

      for (let index = 0; index < meta.setCount; index += 1) {
        const savedSet = log?.sets[index] || { weight: '', reps: '', done: false };
        const row = document.createElement('div');
        const number = document.createElement('span');
        const weightLabel = document.createElement('label');
        const weightCaption = document.createElement('span');
        const weightInput = document.createElement('input');
        const repsLabel = document.createElement('label');
        const repsCaption = document.createElement('span');
        const repsInput = document.createElement('input');
        const doneButton = document.createElement('button');

        row.className = `set-log-row${savedSet.done ? ' is-done' : ''}`;
        number.className = 'set-number';
        number.textContent = String(index + 1).padStart(2, '0');

        weightLabel.className = 'set-field';
        weightCaption.textContent = 'Carga kg';
        weightInput.type = 'number';
        weightInput.inputMode = 'decimal';
        weightInput.min = '0';
        weightInput.step = '0.5';
        weightInput.placeholder = '0';
        weightInput.value = savedSet.weight;
        weightInput.disabled = isLocked;
        weightInput.setAttribute('aria-label', `Carga da série ${index + 1} em quilos`);

        repsLabel.className = 'set-field';
        repsCaption.textContent = 'Reps';
        repsInput.type = 'number';
        repsInput.inputMode = 'numeric';
        repsInput.min = '0';
        repsInput.step = '1';
        repsInput.placeholder = meta.targetReps.split('–')[0] || '0';
        repsInput.value = savedSet.reps;
        repsInput.disabled = isLocked;
        repsInput.setAttribute('aria-label', `Repetições da série ${index + 1}`);

        doneButton.className = 'set-done';
        doneButton.type = 'button';
        doneButton.textContent = '✓';
        doneButton.disabled = isLocked;
        doneButton.setAttribute('aria-label', `Concluir série ${index + 1}`);
        doneButton.setAttribute('aria-pressed', String(savedSet.done));

        weightInput.addEventListener('input', () => {
          updateSetValue(meta, index, 'weight', weightInput.value);
        });
        repsInput.addEventListener('input', () => {
          updateSetValue(meta, index, 'reps', repsInput.value);
        });
        doneButton.addEventListener('click', () => {
          const completed = toggleSetDone(meta, index);
          if (completed === null) return;
          row.classList.toggle('is-done', completed);
          doneButton.setAttribute('aria-pressed', String(completed));
        });

        weightLabel.append(weightCaption, weightInput);
        repsLabel.append(repsCaption, repsInput);
        row.append(number, weightLabel, repsLabel, doneButton);
        exSetLog.append(row);
      }

      updateOpenLoggerProgress();
    }

    function updateSetValue(meta, index, field, value) {
      const session = ensureSession(meta.day);
      if (!session) return;
      const log = getExerciseLog(session, meta, true);
      log.sets[index][field] = value;
      saveTrainingState();
      refreshSessionUi();
    }

    function toggleSetDone(meta, index) {
      const session = ensureSession(meta.day);
      if (!session) return null;
      const log = getExerciseLog(session, meta, true);
      const set = log.sets[index];
      set.done = !set.done;
      saveTrainingState();

      if (set.done) {
        const restSeconds = ['seg', 'ter'].includes(meta.day) ? 180 : 90;
        startRestTimer(restSeconds);
      }

      refreshSessionUi();
      const stats = getSessionStats(session);
      if (stats.progress === 100) showToast('Todas as séries concluídas. Hora de salvar o treino.');
      return set.done;
    }

    function updateOpenLoggerProgress() {
      if (!currentExerciseMeta) return;
      const active = trainingState.activeSession;
      const log = active?.day === currentExerciseMeta.day
        ? getExerciseLog(active, currentExerciseMeta)
        : null;
      const done = log?.sets.filter(set => set.done).length || 0;
      exLogProgress.textContent = `${done}/${currentExerciseMeta.setCount}`;
    }

    function renderHistory() {
      const history = trainingState.history;
      const totalSetsDone = history.reduce((sum, session) => sum + (session.completedSets || 0), 0);
      const totalVolumeDone = history.reduce((sum, session) => sum + (session.volume || 0), 0);

      historySummary.replaceChildren();
      [
        [history.length, 'Treinos'],
        [totalSetsDone, 'Séries'],
        [formatVolume(totalVolumeDone), 'Volume']
      ].forEach(([value, label]) => {
        const item = document.createElement('div');
        const strong = document.createElement('strong');
        const span = document.createElement('span');
        item.className = 'history-summary-item';
        strong.textContent = value;
        span.textContent = label;
        item.append(strong, span);
        historySummary.append(item);
      });

      historyList.replaceChildren();
      if (!history.length) {
        const empty = document.createElement('div');
        empty.className = 'history-empty';
        empty.textContent = 'Seu histórico começa quando você finaliza a primeira sessão. Cada treino salvo aparece aqui.';
        historyList.append(empty);
        return;
      }

      history.forEach(session => {
        const card = document.createElement('article');
        const top = document.createElement('div');
        const title = document.createElement('h3');
        const time = document.createElement('time');
        const metrics = document.createElement('div');

        card.className = 'history-card';
        top.className = 'history-card-top';
        metrics.className = 'history-card-metrics';
        title.textContent = getWorkoutName(session.day);
        time.dateTime = new Date(session.finishedAt || session.startedAt).toISOString();
        time.textContent = formatDate(session.finishedAt || session.startedAt);
        metrics.textContent = `${session.completedSets || 0}/${session.expectedSets || 0} séries · ${formatVolume(session.volume)} · ${formatDuration(session.durationSeconds)}`;
        top.append(title, time);
        card.append(top, metrics);
        historyList.append(card);
      });
    }

    function openHistoryDrawer() {
      historyLastFocus = document.activeElement;
      renderHistory();
      historyOverlay.inert = false;
      historyOverlay.setAttribute('aria-hidden', 'false');
      historyOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      window.setTimeout(() => historyClose.focus(), 0);
    }

    function closeHistoryDrawer() {
      if (!historyOverlay.classList.contains('open')) return;
      historyOverlay.classList.remove('open');
      historyOverlay.setAttribute('aria-hidden', 'true');
      historyOverlay.inert = true;
      document.body.style.overflow = '';
      historyLastFocus?.focus();
    }

    function startRestTimer(seconds) {
      const active = trainingState.activeSession;
      if (!active) return;
      active.restEndsAt = Date.now() + (seconds * 1000);
      saveTrainingState();
      restTimer.hidden = false;
      window.clearInterval(restTimerInterval);
      updateRestTimer();
      restTimerInterval = window.setInterval(updateRestTimer, 1000);
    }

    function updateRestTimer() {
      const active = trainingState.activeSession;
      const remaining = active?.restEndsAt
        ? Math.max(0, Math.ceil((active.restEndsAt - Date.now()) / 1000))
        : 0;

      restTimerValue.textContent = formatDuration(remaining);
      if (remaining > 0) return;

      stopRestTimer();
      if (active) {
        showToast('Descanso concluído. Próxima série.');
        navigator.vibrate?.(150);
      }
    }

    function adjustRestTimer(seconds) {
      const active = trainingState.activeSession;
      if (!active?.restEndsAt) return;
      active.restEndsAt = Math.max(Date.now(), active.restEndsAt + (seconds * 1000));
      saveTrainingState();
      updateRestTimer();
    }

    function stopRestTimer() {
      window.clearInterval(restTimerInterval);
      restTimerInterval = null;
      restTimer.hidden = true;
      if (trainingState.activeSession) {
        trainingState.activeSession.restEndsAt = null;
        saveTrainingState();
      }
    }

    function restoreRestTimer() {
      const restEndsAt = trainingState.activeSession?.restEndsAt;
      if (!restEndsAt || restEndsAt <= Date.now()) {
        restTimer.hidden = true;
        if (trainingState.activeSession?.restEndsAt) {
          trainingState.activeSession.restEndsAt = null;
          saveTrainingState();
        }
        return;
      }
      restTimer.hidden = false;
      updateRestTimer();
      restTimerInterval = window.setInterval(updateRestTimer, 1000);
    }

    function showToast(message) {
      appToast.textContent = message;
      appToast.classList.add('show');
      window.clearTimeout(toastTimeout);
      toastTimeout = window.setTimeout(() => appToast.classList.remove('show'), 3200);
    }

    function initializeTrainingApp() {
      prepareExerciseRows();

      const today = dayByWeekday[new Date().getDay()];
      document.querySelector(`.day-tab[data-day="${today}"]`)?.classList.add('is-today');

      sessionToggle.addEventListener('click', handleSessionToggle);
      historyOpen.addEventListener('click', openHistoryDrawer);
      historyClose.addEventListener('click', closeHistoryDrawer);
      historyOverlay.addEventListener('click', event => {
        if (event.target === historyOverlay) closeHistoryDrawer();
      });
      restMinus.addEventListener('click', () => adjustRestTimer(-15));
      restSkip.addEventListener('click', stopRestTimer);
      restPlus.addEventListener('click', () => adjustRestTimer(15));

      document.addEventListener('keydown', event => {
        if (!historyOverlay.classList.contains('open')) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          closeHistoryDrawer();
        } else if (event.key === 'Tab') {
          event.preventDefault();
          historyClose.focus();
        }
      });

      const requestedDay = window.location.hash.slice(1);
      const initialDay = validDays.has(requestedDay)
        ? requestedDay
        : trainingState.activeSession?.day || today;
      const initialUrl = new URL(window.location.href);
      initialUrl.hash = initialDay;
      window.history.replaceState({ day: initialDay }, '', initialUrl);
      showDay(initialDay, { scroll: false, updateUrl: false });

      window.addEventListener('popstate', () => {
        const day = window.location.hash.slice(1);
        if (validDays.has(day)) showDay(day, { updateUrl: false });
      });

      restoreRestTimer();
      refreshSessionUi();
      window.setInterval(() => {
        if (trainingState.activeSession) {
          sessionDuration.textContent = formatDuration(getSessionStats(trainingState.activeSession).duration);
        }
      }, 1000);
    }

    // Modal elements
    const exModalOverlay = document.getElementById('exModal');
    const exModalClose = document.getElementById('exModalClose');
    const exModalName = document.getElementById('exModalName');
    const exModalMuscles = document.getElementById('exModalMuscles');
    const exModalCues = document.getElementById('exModalCues');
    const exModalMistakes = document.getElementById('exModalMistakes');
    const exModalYT = document.getElementById('exModalYT');
    let lastFocusedExercise = null;

    function openExModal(exerciseEl, data) {
      const type = exerciseEl.classList.contains('hiper') ? 'accent2'
        : exerciseEl.classList.contains('neutral') ? 'neutral'
          : 'accent';

      const name = getExerciseName(exerciseEl);
      lastFocusedExercise = exerciseEl;

      exModalName.textContent = name;
      exModalName.className = 'ex-modal-name ' + type;

      exModalMuscles.innerHTML =
        data.muscles.map(m => `<span class="ex-muscle-tag">${m}</span>`).join('') +
        (data.secondary || []).map(m => `<span class="ex-muscle-tag secondary">${m}</span>`).join('');

      exModalCues.innerHTML = data.cues.map((cue, i) =>
        `<div class="ex-cue"><span class="ex-cue-num">${i + 1}</span><span>${cue}</span></div>`
      ).join('');

      exModalMistakes.innerHTML = data.mistakes.map(m =>
        `<div class="ex-mistake"><span>${m}</span></div>`
      ).join('');

      exModalYT.href = `https://www.youtube.com/results?search_query=${data.ytQuery}`;
      renderExerciseLogger(exerciseEl);

      exModalOverlay.inert = false;
      exModalOverlay.setAttribute('aria-hidden', 'false');
      exModalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';

      document.getElementById('exModalPanel').scrollTop = 0;
      window.setTimeout(() => exModalClose.focus(), 0);
    }

    function closeExModal() {
      if (!exModalOverlay.classList.contains('open')) return;

      exModalOverlay.classList.remove('open');
      exModalOverlay.setAttribute('aria-hidden', 'true');
      exModalOverlay.inert = true;
      document.body.style.overflow = '';
      lastFocusedExercise?.focus();
      currentExerciseMeta = null;
    }

    exModalClose.addEventListener('click', closeExModal);
    exModalOverlay.addEventListener('click', e => { if (e.target === exModalOverlay) closeExModal(); });
    document.addEventListener('keydown', event => {
      if (!exModalOverlay.classList.contains('open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeExModal();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = [exModalClose, exModalYT].filter(element => !element.inert);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    });

    // Wire up all .exercise elements
    document.querySelectorAll('.exercise').forEach(el => {
      const name = getExerciseName(el);

      if (EXERCISES[name]) {
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-haspopup', 'dialog');
        el.setAttribute('aria-label', `Ver detalhes de ${name}`);
        el.addEventListener('click', () => openExModal(el, EXERCISES[name]));
        el.addEventListener('keydown', event => {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          openExModal(el, EXERCISES[name]);
        });
      }
    });

    initializeTrainingApp();

    const bootSplash = document.getElementById('bootSplash');
    const hideBootSplash = () => {
      if (!bootSplash || bootSplash.classList.contains('is-hidden')) return;
      bootSplash.classList.add('is-hidden');
      document.body.classList.remove('is-booting');
    };

    window.addEventListener('load', () => {
      window.setTimeout(hideBootSplash, prefersReducedMotion ? 0 : 550);
    });

    window.setTimeout(hideBootSplash, 2200);

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
          console.error('Falha ao registrar service worker:', err);
        });
      });
    }
