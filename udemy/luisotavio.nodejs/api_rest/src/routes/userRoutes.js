import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// sistema real esses dois nao deveria existir
router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * padrao de usos de nome dos metodos do controller
 * index -> lista todos
 * store/create -> cria um usuario
 * delete -> apaga um usuario
 * show -> mostra um usuario
 * update -> atualiza um usuario
 */
