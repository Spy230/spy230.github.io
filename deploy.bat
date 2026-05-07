@echo off
echo 🔨 Сборка проекта...
call npm run build

echo 📦 Подготовка к деплою...
cd dist

REM Создаем .nojekyll файл для GitHub Pages
echo. > .nojekyll

git init
git config user.email "deploy@github.com"
git config user.name "Deploy Bot"
git add -A
git commit -m "Deploy: %date% %time%"
git branch -M gh-pages

echo 🚀 Отправка на GitHub Pages...
git push -f https://github.com/Spy230/spy230.github.io.git gh-pages

cd ..
echo ✅ Деплой завершен! Сайт доступен по адресу: https://spy230.github.io
pause
