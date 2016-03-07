<?php
/**
 * DesignSelect
 *
 * PHP version 5
 *
 * @category    Board
 * @package     Xpressengine\Plugins\Board
 * @author      XE Team (developers) <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        http://www.xpressengine.com
 */
namespace Xpressengine\Plugins\Board\UIObjects;

use Xpressengine\UIObject\AbstractUIObject;
use View;

/**
 * DesignSelect
 * DIV 방식 select
 *
 * ## 사용법
 *
 * ```php
 * uio('uiobject/board@select', [
 *      'name' => 'selectNameAttribute',
 *      'label' => 'label',
 *      'value' => 'value',
 *      'items' => [
 *          ['value' => 'value1', 'text' => 'text1'],
 *          ['value' => 'value2', 'text' => 'text2'],
 *      ],
 * ]);
 * ```
 *
 * @category    Board
 * @package     Xpressengine\Plugins\Board
 * @author      XE Team (developers) <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        http://www.xpressengine.com
 */
class DesignSelect extends AbstractUIObject
{
    protected static $loaded = false;

    protected static $id = 'uiobject/board@select';

    /**
     * render
     *
     * @return string
     */
    public function render()
    {
        $args = $this->arguments;

        if (empty($args['name'])) {
            throw new \Exception;
        }
        if (empty($args['items'])) {
            $args['items'] = [];
        }
        if (empty($args['label'])) {
            $args['label'] = xe_trans('xe::select');
        }

        if (empty($args['value'])) {
            $args['value'] = '';
            $args['text'] = '';
        } else {
            foreach ($args['items'] as $item) {
                if ($item['value'] == $args['value']) {
                    $args['text'] = $item['text'];
                }
            }
        }

        $args['scriptInit'] = false;
        if (self::$loaded === false) {
            self::$loaded = true;

            $args['scriptInit'] = true;
        }

        return View::make('board::views.uiobject.designSelect', $args)->render();
    }

    /**
     * boot
     *
     * @return void
     */
    public static function boot()
    {
    }
}