/**
 * @swagger
 * /school:
 *   post:
 *     tags:
 *       - Schools
 *     name: Resgister School
 *     summary: Resgister School
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             type:
 *               type: string
 *             address:
 *               type: string
 *           example:
 *             name: schoolOne
 *             type: high
 *             address: gangnam
 *     responses:
 *       '200':
 *         description: Get one School
 *       '404':
 *         fail
 *   get:
 *     tags:
 *       - Schools
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
