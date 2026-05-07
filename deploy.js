import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

try {
  console.log('📦 Подготовка к деплою...');
  
  // Создаем .nojekyll файл
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  console.log('✅ Создан .nojekyll файл');
  
  // Копируем CNAME файл
  const cnameSource = path.join(process.cwd(), 'CNAME');
  const cnameDest = path.join(distDir, 'CNAME');
  if (fs.existsSync(cnameSource)) {
    fs.copyFileSync(cnameSource, cnameDest);
    console.log('✅ Скопирован CNAME файл');
  }
  
  // Инициализируем git в папке dist
  process.chdir(distDir);
  
  execSync('git init', { stdio: 'inherit' });
  execSync('git config user.email "deploy@github.com"', { stdio: 'inherit' });
  execSync('git config user.name "Deploy Bot"', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  execSync('git commit -m "Deploy: ' + new Date().toISOString() + '"', { stdio: 'inherit' });
  execSync('git branch -M gh-pages', { stdio: 'inherit' });
  
  console.log('🚀 Отправка на GitHub Pages...');
  execSync('git push -f https://github.com/Spy230/spy230.github.io.git gh-pages', { stdio: 'inherit' });
  
  console.log('✅ Деплой завершен! Сайт доступен по адресу: https://spy230.github.io');
} catch (error) {
  console.error('❌ Ошибка при деплое:', error.message);
  process.exit(1);
}
