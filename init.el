;;; init.el --- description -*- lexical-binding: t; -*-
;;
;;; Commentary:
;;
;;; Code:

(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

(let ((needed-packages '(ox-twbs org-ref)))
  (dolist (pkg needed-packages)
    (unless (package-installed-p pkg)
      (package-install pkg))))

(require 'org)
(require 'org-ref)
(require 'ox-twbs)

(defun latex-math-mode (a) nil)

(cl-pushnew '("github" . "https://github.com/%s")
         org-link-abbrev-alist)

;;; init.el ends here
